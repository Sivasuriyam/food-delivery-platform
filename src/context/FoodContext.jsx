import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const FoodContext = createContext(null);
export function FoodProvider({children}) {
  const [cart, setCart] = useState(() => { try { return JSON.parse(localStorage.getItem('crave-cart') || '[]'); } catch { return []; } });
  const [orders, setOrders] = useState(() => { try { return JSON.parse(localStorage.getItem('crave-orders') || '[]'); } catch { return []; } });
  useEffect(() => localStorage.setItem('crave-cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('crave-orders', JSON.stringify(orders)), [orders]);
  const addToCart = (item, quantity=1, customizations=[]) => setCart(prev => {
    const key = `${item.id}-${[...customizations].sort().join('|')}`;
    const existing = prev.find(x => x.key === key);
    if (existing) return prev.map(x => x.key === key ? {...x, quantity:x.quantity+quantity} : x);
    return [...prev, {...item, quantity, customizations, key}];
  });
  const updateQuantity = (key, quantity) => setCart(prev => quantity <= 0 ? prev.filter(x => x.key !== key) : prev.map(x => x.key === key ? {...x, quantity} : x));
  const removeFromCart = key => setCart(prev => prev.filter(x => x.key !== key));
  const clearCart = () => setCart([]);
  const subtotal = useMemo(() => cart.reduce((sum,item) => sum + item.price * item.quantity, 0), [cart]);
  const count = useMemo(() => cart.reduce((sum,item) => sum + item.quantity, 0), [cart]);
  const placeOrder = (details, total) => {
    const order = {id:`CR-${Math.random().toString(36).slice(2,8).toUpperCase()}`, items:cart, details, total, status:'confirmed', createdAt:new Date().toISOString()};
    setOrders(prev => [order,...prev]); clearCart(); return order;
  };
  return <FoodContext.Provider value={{cart,orders,addToCart,updateQuantity,removeFromCart,clearCart,subtotal,count,placeOrder}}>{children}</FoodContext.Provider>;
}
export const useFood = () => { const ctx = useContext(FoodContext); if (!ctx) throw new Error('useFood must be used inside FoodProvider'); return ctx; };
