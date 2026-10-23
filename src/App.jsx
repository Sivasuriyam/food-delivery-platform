import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Orders from './pages/Orders';
function App(){const location=useLocation();return <div className="app-shell"><Header/><main className="main-content"><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<Home/>}/><Route path="/restaurant/:id" element={<Restaurant/>}/><Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/order/:id" element={<OrderConfirmation/>}/><Route path="/orders" element={<Orders/>}/><Route path="*" element={<Home/>}/></Routes></AnimatePresence></main><Footer/></div>}
export default App;
