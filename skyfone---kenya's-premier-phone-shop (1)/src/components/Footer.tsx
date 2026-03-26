import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-white mb-6 block">SKYFONE</span>
            <p className="text-slate-400 mb-6">
              Kenya's premier destination for genuine phones and accessories. Quality you can trust, service you'll love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-sky-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-sky-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-sky-500 transition-colors">Latest Phones</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Repair Services</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Trade-in Program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-sky-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-sky-500 shrink-0" />
                <span>Skyfone Plaza, Luthuli Avenue, Nairobi CBD</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-sky-500 shrink-0" />
                <span>+254 702 534652</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-sky-500 shrink-0" />
                <span>sales@skyfone.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Skyfone Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
