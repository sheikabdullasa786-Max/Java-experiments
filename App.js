import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Paradise Nursery</h2>;
}

function Products() {
  return <h2>Our Plants</h2>;
}

function Cart() {
  return <h2>Your Cart</h2>;
}

function About() {
  return <h2>About Paradise Nursery</h2>;
}

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#e8ffe8" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
