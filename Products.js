import axios from "axios";
import { useEffect, useState } from "react";
import "./Products.css";

export default function Products() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const placeOrder = async (productId) => {
    try {
      await axios.post("http://localhost:5000/api/orders/place", {
        productId,
        quantity: 1
      });

      alert("Order placed successfully!");
      fetchProducts();

    } catch (error) {
      console.error(error);
      alert("Order failed");
    }
  };

  return (
    <div className="container">

      <h1 className="title">Fashion Store</h1>

      <div className="grid">
        {products.map(p => (
          <div className="card" key={p._id}>

            <img
              src="https://via.placeholder.com/200"
              alt={p.name}
            />

            <h3>{p.name}</h3>
            <p className="price">₹ {p.price}</p>
            <p>Stock: {p.stock}</p>

            <button
              disabled={p.stock === 0}
              onClick={() => placeOrder(p._id)}
            >
              {p.stock === 0 ? "Out of Stock" : "Buy Now"}
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}
