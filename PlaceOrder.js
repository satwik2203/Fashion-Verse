import { useState } from "react";

export default function PlaceOrder({ products, setProducts }) {

const [selectedId, setSelectedId] = useState("");
const [orderQty, setOrderQty] = useState("");

const placeOrder = () => {

  const product = products.find(p => p.id == selectedId);

    if (!product) {
      alert("Select product");
      return;
    }

    if (orderQty <= 0) {
      alert("Invalid quantity");
      return;
    }

    if (product.quantity < orderQty) {
      alert("Not enough stock");
      return;
    }

    // REDUCE INVENTORY
    setProducts(products.map(p =>
      p.id == selectedId
        ? { ...p, quantity: p.quantity - Number(orderQty) }
        : p
    ));

    alert("Order placed successfully");
    setOrderQty("");
  };

  return (
    <div>

      <h2>Place Order</h2>

      <select
        value={selectedId}
        onChange={e => setSelectedId(e.target.value)}
      >
        <option value="">Select Product</option>
        {products.map(p => (
          <option key={p.id} value={p.id}>
            {p.name} (Stock: {p.quantity})
          </option>
        ))}
      </select>

      <br /><br />

      <input
        type="number"
        placeholder="Order Quantity"
        value={orderQty}
        onChange={e => setOrderQty(e.target.value)}
      />

      <br /><br />

      <button onClick={placeOrder}>Place Order</button>

    </div>
  );
}
