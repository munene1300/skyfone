import { ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  onAddToCart: () => void;
  key?: number | string;
}

export default function ProductCard({ name, price, image, category, rating, onAddToCart }: ProductProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-700 rounded-md uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"} 
            />
          ))}
          <span className="ml-1 text-xs text-slate-400">({rating})</span>
        </div>
        <h3 className="font-bold text-slate-900 text-lg mb-1 truncate">{name}</h3>
        <p className="text-sky-600 font-extrabold text-xl mb-4">
          KSh {price.toLocaleString()}
        </p>
        
        <button 
          onClick={onAddToCart}
          className="w-full flex items-center justify-center space-x-2 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-sky-600 transition-colors font-medium"
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}
