import { motion } from 'framer-motion';
import { Clock3, Star, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function RestaurantCard({restaurant,index=0}) { return <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:index*.055,duration:.35}} whileHover={{y:-5}} className="restaurant-card">
  <Link to={`/restaurant/${restaurant.id}`} className="restaurant-image-wrap"><img src={restaurant.image} alt={restaurant.name} className="restaurant-image" loading="lazy"/><span className="restaurant-badge">{restaurant.badge}</span><button className="heart-button" aria-label={`Save ${restaurant.name}`} onClick={e=>{e.preventDefault();e.currentTarget.classList.toggle('hearted')}}>♡</button></Link>
  <div className="restaurant-card-body"><div className="restaurant-title-row"><h3><Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link></h3><span className="rating"><Star size={14} fill="currentColor"/> {restaurant.rating}</span></div><p className="muted cuisine">{restaurant.cuisine}</p><div className="restaurant-meta"><span><Clock3 size={14}/>{restaurant.time}</span><i>·</i><span><Bike size={15}/>${restaurant.fee.toFixed(2)} delivery</span></div></div>
</motion.div> }
