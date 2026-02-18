import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {

const [productList, setProductList] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
const fetchProducts = async () => {
setLoading(true);

  try {
    const response = await axios.get("http://localhost:5000/api/products");
    const dataFromApi = response.data || [];
    setProductList(dataFromApi);
  } catch (err) {
    console.log("Something went wrong while fetching products:", err);
    setError(err);
  } finally {
    setLoading(false);
  }
};

fetchProducts();


}, []);

let totalStockCount = 0;

if (productList && productList.length > 0) {
for (let i = 0; i < productList.length; i++) {
const item = productList[i];
const stockValue = item.stock ? item.stock : 0;
totalStockCount = totalStockCount + stockValue;
}
}

const totalProducts = productList.length;

return (
<div>
<h1>Dashboard</h1>

  {loading && <p>Loading data...</p>}
  {error && <p style={{ color: "red" }}>Failed to load products.</p>}

  <div
    style={{
      display: "flex",
      gap: "20px",
      marginTop: "30px"
    }}
  >

    <StatCard title="Total Products" value={totalProducts} />
    <StatCard title="Total Stock" value={totalStockCount} />

  </div>
</div>


);
}

function StatCard(props) {

const { title, value } = props;

const cardStyle = {
background: "white",
padding: "25px",
borderRadius: "10px",
boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
width: "220px"
};

return (
<div style={cardStyle}>
<h3>{title}</h3>
<h1>{value}</h1>
</div>
);
}