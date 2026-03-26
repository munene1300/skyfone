import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 185000,
    category: "Phones",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 165000,
    category: "Phones",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1707150580718-202241619864?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    name: "AirPods Pro (2nd Gen)",
    price: 32000,
    category: "Audio",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1628202926206-c63a34b1e241?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 65000,
    category: "Watches",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bc78344?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 45000,
    category: "Audio",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1648447226600-2e72197f976c?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    name: "iPad Air M2",
    price: 95000,
    category: "Tablets",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 7,
    name: "MagSafe Battery Pack",
    price: 12500,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 8,
    name: "JBL Flip 6",
    price: 18000,
    category: "Speakers",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612441304231-a9a0827a5646?auto=format&fit=crop&q=80&w=500"
  }
];

export default function App() {
  const [cart, setCart] = useState<number[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Skyfone, I'm interested in buying a phone/accessory.");
    window.open(`https://wa.me/254702534652?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-sky-100 selection:text-sky-900">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Hero />
        <CategorySection />
        
        {/* Featured Products */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Products</h2>
                <p className="mt-4 text-slate-500 max-w-2xl">
                  Handpicked premium devices and accessories for the ultimate tech experience.
                </p>
              </div>
              <div className="flex space-x-2">
                {["All", "Phones", "Audio", "Accessories"].map((filter) => (
                  <button 
                    key={filter}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:border-sky-600 hover:text-sky-600 transition-all"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  onAddToCart={() => addToCart(product.id)}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="inline-flex items-center px-8 py-3 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all">
                View All Products
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-sky-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          </div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Need Expert Advice or Repair?
            </h2>
            <p className="mt-4 text-xl text-sky-100">
              Our team of tech experts is ready to help you choose the right device or fix your broken screen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={openWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white text-sky-600 rounded-xl font-bold text-lg hover:bg-sky-50 transition-all shadow-xl"
              >
                Chat on WhatsApp
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-sky-700 text-white rounded-xl font-bold text-lg hover:bg-sky-800 transition-all">
                Visit Our Shop
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl shadow-green-200 flex items-center justify-center"
      >
        <MessageSquare size={28} />
      </motion.button>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-900 text-white rounded-full shadow-2xl flex items-center space-x-3"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Added to cart successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
