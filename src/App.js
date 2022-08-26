import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import OrderSummary from './components/OrderSummary.js';
import { NoMatch } from './components/NoMatch.js';
import Products from './components/Products.js';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
