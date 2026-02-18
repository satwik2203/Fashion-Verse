import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: 10, background: "#ddd" }}>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/orders">Orders</Link> |{" "}
      <Link to="/place-order">Place Order</Link> |{" "}
      <Link to="/reports">Reports</Link>
    </div>
  );
}
