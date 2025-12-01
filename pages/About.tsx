import React from 'react';
import { Coffee, Heart, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-cafe-cream overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cafe-forest flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
            alt="Cafe Interior Dark" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cafe-forest/60 to-cafe-forest/90"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-cafe-sage uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Since 2022</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif tracking-tight mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-cafe-sage mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Intro Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border-t-8 border-cafe-olive">
          <h2 className="text-2xl md:text-3xl font-bold text-cafe-dark mb-6 font-serif">Welcome to The Roadhouse Café</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Nestled in the heart of Narayangaon, we are more than just a café—we are a community hub. 
            Born from a passion for great coffee and honest food, The Roadhouse Café was established to provide a cozy sanctuary where flavors meet memories.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        
        {/* Section 1: The Vibe */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-cafe-olive rounded-2xl z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
              alt="Cozy Corner" 
              className="relative z-10 rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-cafe-dark mb-4 font-serif">A Place to Unwind</h3>
            <p className="text-gray-800 mb-6 leading-relaxed">
              We believe that the best conversations happen over a hot cup of coffee. Our interiors are designed with warmth in mind—earthy tones, soft lighting, and comfortable seating that invites you to stay a while. Whether you're catching up with old friends, working on your next big idea, or just enjoying a quiet moment alone, we have a spot just for you.
            </p>
            <div className="flex items-center text-cafe-dark font-semibold">
              <div className="w-12 h-12 bg-cafe-sage/30 rounded-full flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-cafe-dark" />
              </div>
              <span>Made with Love</span>
            </div>
          </div>
        </div>

        {/* Section 2: The Taste */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute top-4 right-4 w-full h-full border-2 border-cafe-olive rounded-2xl z-0 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" 
              alt="Quality Food" 
              className="relative z-10 rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-cafe-dark mb-4 font-serif">Quality in Every Bite</h3>
            <p className="text-gray-800 mb-6 leading-relaxed">
              We don't take shortcuts when it comes to taste. Our menu is a curated mix of comfort food and gourmet delights. From our signature cold coffees to our crispy veggie burgers, every ingredient is chosen for freshness and flavor. We take pride in serving food that not only looks good but tastes like home.
            </p>
            <div className="flex items-center text-cafe-dark font-semibold">
              <div className="w-12 h-12 bg-cafe-sage/30 rounded-full flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-cafe-dark" />
              </div>
              <span>Premium Ingredients</span>
            </div>
          </div>
        </div>

      </div>

      {/* Values Section */}
      <div className="bg-cafe-forest text-cafe-cream py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-cafe-sage/70 max-w-2xl mx-auto">What drives us every single day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-cafe-sage/10 hover:bg-white/10 transition-colors text-center">
              <Coffee className="h-10 w-10 text-cafe-sage mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-cafe-sage/70 text-sm leading-relaxed">
                Real food, real coffee, and real people. We stay true to our recipes and our roots.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-cafe-sage/10 hover:bg-white/10 transition-colors text-center">
              <Users className="h-10 w-10 text-cafe-sage mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-cafe-sage/70 text-sm leading-relaxed">
                We are proud to be a part of Narayangaon. We strive to be a welcoming space for everyone.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-cafe-sage/10 hover:bg-white/10 transition-colors text-center">
              <Heart className="h-10 w-10 text-cafe-sage mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-cafe-sage/70 text-sm leading-relaxed">
                Every dish we serve is prepared with care and a genuine love for the culinary arts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-cafe-dark mb-8">Come Experience It Yourself</h2>
        <Link 
          to="/menu" 
          className="inline-block bg-cafe-dark text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-cafe-dark/90 hover:scale-105 transition-all transform"
        >
          Explore Our Menu
        </Link>
      </div>

    </div>
  );
};

export default About;