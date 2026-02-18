import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
