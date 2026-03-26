import { ShoppingCart, Search, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              SKYFONE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Phones</a>
            <a href="#" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Accessories</a>
            <a href="#" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Repairs</a>
            <a href="#" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Deals</a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-sky-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#" className="block px-3 py-2 text-slate-600 font-medium">Phones</a>
          <a href="#" className="block px-3 py-2 text-slate-600 font-medium">Accessories</a>
          <a href="#" className="block px-3 py-2 text-slate-600 font-medium">Repairs</a>
          <a href="#" className="block px-3 py-2 text-slate-600 font-medium">Deals</a>
        </div>
      </div>
    </nav>
  );
}
