import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Projects from "./pages/SpecialProjects.js";
import Gallery from "./pages/PhotoGallery.js";
import Category from "./pages/Category.js";
import ScrollToHash from "./components/ScrollToHash.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/category" element={<Category/>}/>
      </Routes>
    </>
  )
}

export default App;
