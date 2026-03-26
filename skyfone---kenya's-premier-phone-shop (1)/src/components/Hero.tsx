import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-100 text-sky-800 mb-4">
                Kenya's Most Trusted Phone Shop
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block">Upgrade Your Tech</span>
                <span className="block text-sky-600">With Skyfone</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Get the latest iPhones, Samsung Galaxy, and premium accessories with same-day delivery across Kenya. Genuine products, 1-year warranty, and expert support.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg shadow-sky-200">
                  Shop Now <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all">
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden lg:max-w-md"
            >
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1000"
                alt="Latest iPhone"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>

        {/* Features Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <ShieldCheck className="text-sky-600" />, title: "100% Genuine", desc: "Official Warranty" },
            { icon: <Truck className="text-sky-600" />, title: "Fast Delivery", desc: "Same day delivery" },
            { icon: <Clock className="text-sky-600" />, title: "Pay on Delivery", desc: "Safe & Secure" },
            { icon: <ShieldCheck className="text-sky-600" />, title: "Expert Repairs", desc: "Certified Techs" },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white shadow-sm border border-slate-100"
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="font-bold text-slate-900 text-sm md:text-base">{feature.title}</h3>
              <p className="text-xs text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
