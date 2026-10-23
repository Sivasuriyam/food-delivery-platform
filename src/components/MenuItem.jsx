import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
export default function MenuItem({item,onAdd}) { return <motion.article className="menu-item" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} whileHover={{y:-2}}>
  <div className="menu-item-copy"><span className="food-tag">{item.tag||item.category}</span><h3>{item.name}</h3><p>{item.desc}</p><strong>${item.price.toFixed(2)}</strong></div><div className="menu-item-photo"><img src={item.image} alt={item.name} loading="lazy"/><button className="add-button" onClick={()=>onAdd(item)} aria-label={`Add ${item.name}`}><Plus size={19}/></button></div>
</motion.article> }
