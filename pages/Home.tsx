import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Utensils, Coffee, DollarSign, MapPin, Clock, Camera } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cafe-cream">
      
      {/* Aesthetic Hero Section - Split Layout */}
      <div className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cafe-sage/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          
          {/* Text Content */}
          <div className="text-left order-2 lg:order-1 pt-8 lg:pt-0">
            <div className="inline-flex items-center space-x-2 bg-cafe-olive/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-cafe-olive/30">
               <span className="w-2 h-2 rounded-full bg-cafe-forest animate-pulse"></span>
               <span className="text-cafe-dark font-bold text-xs tracking-widest uppercase">Open Daily 11 AM - 11 PM</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-cafe-dark font-serif leading-[1.1] mb-2">
              {BUSINESS_INFO.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-cafe-forest font-serif mb-6 italic opacity-90">
              {BUSINESS_INFO.hindiName}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-lg leading-relaxed font-light">
              Where <span className="font-semibold text-cafe-dark">great taste</span> meets a <span className="font-semibold text-cafe-dark">cozy ambience</span>. 
              Escape the ordinary and treat yourself to the best coffee in Narayangaon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/menu" 
                className="px-8 py-4 bg-cafe-dark text-white rounded-full font-bold transition-all transform hover:scale-105 hover:bg-cafe-forest shadow-xl flex items-center justify-center sm:justify-start"
              >
                View Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/reviews" 
                className="px-8 py-4 bg-transparent border-2 border-cafe-dark text-cafe-dark rounded-full font-bold transition-all hover:bg-cafe-dark hover:text-white flex items-center justify-center sm:justify-start"
              >
                See Reviews
              </Link>
            </div>
            
            {/* Quick Stats/Info */}
            <div className="mt-12 flex items-center gap-6 text-cafe-dark/80 text-sm font-medium border-t border-cafe-sage/30 pt-6">
                <div className="flex items-center gap-2">
                    <Star size={18} className="text-cafe-olive fill-cafe-olive" />
                    <span>{BUSINESS_INFO.rating} Rating</span>
                </div>
                <div className="w-1 h-1 bg-cafe-sage rounded-full"></div>
                <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-cafe-olive" />
                    <span>Dwarka Height</span>
                </div>
                <div className="w-1 h-1 bg-cafe-sage rounded-full"></div>
                <div className="flex items-center gap-2">
                    <Clock size={18} className="text-cafe-olive" />
                    <span>Dine-in & Drive-thru</span>
                </div>
            </div>
          </div>
          
          {/* Aesthetic Image Composition */}
          <div className="relative order-1 lg:order-2 h-[400px] lg:h-[650px] w-full flex items-center justify-center">
             {/* Abstract Shapes */}
             <div className="absolute inset-0 bg-cafe-olive rounded-[40px] rotate-6 opacity-20 scale-95 transform transition-transform duration-700 hover:rotate-3"></div>
             <div className="absolute bottom-10 -right-10 w-40 h-40 bg-cafe-sage rounded-full blur-2xl opacity-40 z-0"></div>
             
             {/* Main Image */}
             <img 
               src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000&auto=format&fit=crop" 
               alt="Aesthetic Coffee" 
               className="relative z-10 w-full h-full object-cover rounded-[40px] shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-700 ease-out"
             />
             
             {/* Floating Badge */}
             <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 transform hover:scale-105 transition-transform">
                 <div className="bg-cafe-dark p-3 rounded-full text-white">
                    <Coffee size={24} />
                 </div>
                 <div>
                     <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Signature</p>
                     <p className="text-cafe-dark font-serif font-bold text-lg">Fresh Brews</p>
                 </div>
             </div>
          </div>

        </div>
      </div>

      {/* Modern Services Strip */}
      <div className="bg-white py-8 border-y border-cafe-sage/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center sm:justify-between gap-6 text-cafe-dark">
             <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cafe-cream transition-colors">
                <Utensils className="h-6 w-6 text-cafe-olive" />
                <span className="font-bold tracking-wide uppercase text-sm">Hygienic Dine-in</span>
             </div>
             <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cafe-cream transition-colors">
                <Coffee className="h-6 w-6 text-cafe-olive" />
                <span className="font-bold tracking-wide uppercase text-sm">Quick Drive-through</span>
             </div>
             <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cafe-cream transition-colors opacity-60 cursor-not-allowed" title="Coming Soon">
                <div className="relative">
                   <div className="absolute inset-0 bg-white/50"></div>
                   <MapPin className="h-6 w-6 text-cafe-olive" />
                </div>
                <span className="font-bold tracking-wide uppercase text-sm line-through decoration-cafe-dark/50">Home Delivery</span>
             </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <span className="text-cafe-olive font-bold tracking-widest uppercase text-sm">Experience the Best</span>
            <h2 className="text-4xl font-bold text-cafe-dark mt-2 mb-4 font-serif">Why Choose The Roadhouse?</h2>
            <div className="w-24 h-1.5 bg-cafe-sage mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: Utensils, 
                title: "Unmatched Taste", 
                desc: "Hand-picked ingredients and chef-crafted recipes that guarantee a flavor explosion.",
              },
              { 
                icon: Coffee, 
                title: "Cozy Vibes", 
                desc: "A thoughtfully designed space with warm lighting and comfy seating for hours of relaxation.",
              },
              { 
                icon: DollarSign, 
                title: "Pocket Friendly", 
                desc: "Premium quality food and beverages at prices that make sense for everyone.",
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg border border-cafe-sage/30 hover:border-cafe-olive transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-cafe-cream rounded-2xl flex items-center justify-center mb-6 text-cafe-olive group-hover:bg-cafe-olive group-hover:text-white transition-colors">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-cafe-dark mb-3 font-serif">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Mini Gallery Strip */}
       <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-serif font-bold text-cafe-dark">Glimpses</h2>
               <div className="hidden sm:flex space-x-2 text-cafe-olive">
                  <Camera size={20} />
                  <span className="text-sm uppercase font-bold tracking-wider">Gallery</span>
               </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
                <div className="rounded-2xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cafe Interior" />
                </div>
                <div className="rounded-2xl overflow-hidden relative group mt-8 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Coffee Art" />
                </div>
                <div className="rounded-2xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Food" />
                </div>
                <div className="rounded-2xl overflow-hidden relative group mt-8 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ambience" />
                </div>
            </div>
          </div>
       </div>

    </div>
  );
};

export default Home;