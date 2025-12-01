import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../constants';
import { Grid, List as ListIcon } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-cafe-cream min-h-screen pb-20">
      {/* Header Banner - Compact */}
      <div className="bg-cafe-forest text-cafe-cream py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" alt="Menu Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-cafe-cream tracking-tight">Our Menu</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Controls Bar */}
        <div className="bg-white rounded-xl shadow-lg p-3 md:p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 border border-cafe-sage/30">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-cafe-dark text-white shadow-md'
                    : 'bg-cafe-cream text-cafe-dark hover:bg-cafe-sage/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-1 bg-cafe-cream p-1 rounded-lg border border-cafe-sage/30">
            <button
              onClick={() => setViewType('grid')}
              className={`p-1.5 rounded-md transition-all ${
                viewType === 'grid' ? 'bg-white text-cafe-dark shadow-sm' : 'text-cafe-dark/50 hover:text-cafe-dark'
              }`}
              aria-label="Grid View"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewType('list')}
              className={`p-1.5 rounded-md transition-all ${
                viewType === 'list' ? 'bg-white text-cafe-dark shadow-sm' : 'text-cafe-dark/50 hover:text-cafe-dark'
              }`}
              aria-label="List View"
            >
              <ListIcon size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        {viewType === 'grid' ? (
          /* Compact Grid View */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-cafe-sage/20">
                {/* Image Area - Square for compact look */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm text-cafe-dark text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                    {item.price}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-3">
                  <h3 className="text-sm md:text-base font-serif font-bold text-cafe-dark leading-tight mb-1 truncate">{item.name}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed h-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Compact List View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-cafe-sage/30">
                <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-cafe-dark truncate pr-2">{item.name}</h3>
                    <span className="text-cafe-dark font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-700 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-cafe-olive text-lg font-serif italic">No items found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;