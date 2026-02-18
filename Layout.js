import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{
        width: "220px",
        background: "#111",
        color: "white",
        padding: "20px"
      }}>
        <h2 style={{ marginBottom: "30px" }}>Fashion Verse</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link style={linkStyle} to="/dashboard">Dashboard</Link>
          <Link style={linkStyle} to="/products">Products</Link>
          <Link style={linkStyle} to="/orders">Orders</Link>
          <Link style={linkStyle} to="/place-order">Place Order</Link>
          <Link style={linkStyle} to="/reports">Reports</Link>
        </nav>
      </div>

      {/* MAIN AREA */}
      <div style={{ flex: 1, background: "#f5f6fa" }}>

        {/* HEADER */}
        <div style={{
          background: "white",
          padding: "15px 30px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <h2>Fashion Verse Admin Panel</h2>
        </div>

        {/* PAGE CONTENT */}
        <div style={{ padding: "30px" }}>
          {children}
        </div>

      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px"
};
