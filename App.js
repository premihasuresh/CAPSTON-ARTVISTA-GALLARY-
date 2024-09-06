import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import UpdateArtist from './components/UpdateArtist';
import CreateArtist from './components/CreateArtist';
import ArtistProfile from './components/ArtistProfile';
import RazorpayCheckout from './components/RazorpayCheckout';
import CartComponent from './components/CartComponent';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './styles/imageStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Elements stripe={stripePromise}><CheckoutPage /></Elements>} />
        <Route path="/create-artist" element={<CreateArtist />} />
        <Route path="/update-artist" element={<UpdateArtist />} />
        <Route path="/artist-profile" element={<ArtistProfile />} />
        <Route path="/razorpay-checkout" element={<RazorpayCheckout />} />
        <Route path="/cart-component" element={<CartComponent />} />
      </Routes>
    </CartProvider>
  );
};

export default App;