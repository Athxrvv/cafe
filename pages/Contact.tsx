import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-cafe-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-cafe-dark mb-4 font-serif">Contact Us</h1>
          <p className="text-gray-800">Drop by for a coffee or reach out to us!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-lg border border-cafe-sage/30">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 bg-cafe-forest text-white flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8 text-cafe-sage">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-cafe-olive/20 p-3 rounded-full mr-4 text-cafe-sage">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-cafe-sage/80 mt-1">
                    {BUSINESS_INFO.address},<br/>
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} - {BUSINESS_INFO.zip}
                  </p>
                  <p className="text-xs text-cafe-sage/60 mt-2">Plus Code: {BUSINESS_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cafe-olive/20 p-3 rounded-full mr-4 text-cafe-sage">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Opening Hours</h3>
                  <p className="text-cafe-sage/80 mt-1">{BUSINESS_INFO.timings}</p>
                  <p className="text-cafe-sage/80">7 Days a Week</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cafe-olive/20 p-3 rounded-full mr-4 text-cafe-sage">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-cafe-sage/80 mt-1">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-cafe-sage hover:bg-cafe-olive text-cafe-forest font-bold py-3 px-4 rounded-lg transition-colors"
               >
                 Chat on WhatsApp
               </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-96 lg:h-auto min-h-[400px] relative bg-gray-200">
             <iframe 
               src={BUSINESS_INFO.googleMapUrl}
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Map Location"
               className="absolute inset-0"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;