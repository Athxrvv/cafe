import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-forest text-cafe-sage/80 border-t border-cafe-olive">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">The Roadhouse Café</h3>
            <p className="text-cafe-sage/70 text-sm mb-4">
              Quality is our recipe. Experience the cozy ambience and great taste at Narayangaon's favorite hangout spot.
            </p>
            <div className="flex space-x-4">
              <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="text-cafe-sage hover:text-white transition">
                <Instagram size={24} />
              </a>
              <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="text-cafe-sage hover:text-white transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-cafe-sage shrink-0" />
                <p>{BUSINESS_INFO.address}, {BUSINESS_INFO.city} - {BUSINESS_INFO.zip}</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-cafe-sage shrink-0" />
                <p>{BUSINESS_INFO.phone}</p>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-cafe-sage shrink-0" />
                <p>{BUSINESS_INFO.timings}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white transition">Our Menu</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact & Location</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cafe-olive/30 text-center text-xs text-cafe-sage/60">
          <p>&copy; {new Date().getFullYear()} The Roadhouse Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;