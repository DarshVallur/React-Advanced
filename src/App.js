import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth';
import { RequiredAuth } from './components/RequiredAuth';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import OrderSummary from './components/OrderSummary.js';
import NoMatch from './components/NoMatch.js';
import Products from './components/Products.js';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import Admin from './components/Admin';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import Profile from './components/Profile';
const LazyAbout = React.lazy(() => import('./components/About.js'));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading">
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
