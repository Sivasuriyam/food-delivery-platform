import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, MapPin, Menu, X, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import { useFood } from '../context/FoodContext';
export default function Header(){
  const {count}=useFood(); const [open,setOpen]=useState(false);
  const navClass=({isActive})=>`nav-link ${isActive?'nav-active':''}`;
  return <header className="site-header"><div className="header-inner wrap">
    <Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><UtensilsCrossed size={21}/></span><span>crave<span className="brand-dot">.</span></span></Link>
    <div className="delivery-location"><span className="location-icon"><MapPin size={17}/></span><span><small>Delivering to</small><strong>Brooklyn, New York <span>⌄</span></strong></span></div>
    <nav className={open?'nav-open':''}><NavLink to="/" className={navClass} onClick={()=>setOpen(false)}>Discover</NavLink><NavLink to="/orders" className={navClass} onClick={()=>setOpen(false)}>Your orders</NavLink><Link to="/cart" className="mobile-cart" onClick={()=>setOpen(false)}>Cart ({count})</Link></nav>
    <div className="header-actions"><Link to="/cart" className="cart-button" aria-label="Open cart"><ShoppingBag size={19}/><span>Cart</span>{count>0&&<b>{count}</b>}</Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button><div className="avatar">J</div></div>
  </div></header>
}
