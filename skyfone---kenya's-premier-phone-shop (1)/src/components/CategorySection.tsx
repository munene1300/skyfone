import { Smartphone, Headphones, Watch, Tablet, Speaker, Zap } from "lucide-react";

const categories = [
  { name: "Phones", icon: <Smartphone />, count: "120+ Items", color: "bg-blue-50 text-blue-600" },
  { name: "Audio", icon: <Headphones />, count: "80+ Items", color: "bg-purple-50 text-purple-600" },
  { name: "Watches", icon: <Watch />, count: "45+ Items", color: "bg-orange-50 text-orange-600" },
  { name: "Tablets", icon: <Tablet />, count: "30+ Items", color: "bg-green-50 text-green-600" },
  { name: "Speakers", icon: <Speaker />, count: "25+ Items", color: "bg-pink-50 text-pink-600" },
  { name: "Accessories", icon: <Zap />, count: "200+ Items", color: "bg-sky-50 text-sky-600" },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Browse Categories</h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Find exactly what you need from our wide selection of premium tech products.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <a 
              key={i} 
              href="#" 
              className="group flex flex-col items-center p-6 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-50 transition-all text-center"
            >
              <div className={`p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-slate-900">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{cat.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
