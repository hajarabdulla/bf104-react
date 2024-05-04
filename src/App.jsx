import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Header from "./layout/Header";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import GithubUsers from "./pages/GithubUsers";
import GithubUserDetail from "./pages/GithubUserDetail";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/users" element={<GithubUsers />} />
        <Route path="/users/:username" element={<GithubUserDetail />} />
      </Routes>
    </div>
  );
};

export default App;
