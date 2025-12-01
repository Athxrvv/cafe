import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="bg-cafe-cream min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-cafe-dark mb-4 font-serif">Customer Reviews</h1>
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-cafe-dark">
             <span>{BUSINESS_INFO.rating}</span>
             <Star className="h-6 w-6 text-cafe-olive fill-current" />
             <span className="text-base font-normal text-cafe-dark/80">({BUSINESS_INFO.reviewCount} Reviews)</span>
          </div>
          <div className="mt-8">
            <a 
              href="https://search.google.com/local/writereview?placeid=PlaceholderForRealID" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-cafe-dark text-white rounded-lg hover:bg-cafe-dark/90 transition shadow-lg"
            >
              <MessageSquare className="mr-2 h-5 w-5" /> Write a Review
            </a>
          </div>
        </div>

        <div className="space-y-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-6 md:p-8 rounded-2xl border border-cafe-sage/40 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-cafe-dark">{review.author}</h3>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
                <div className="flex text-cafe-olive">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-cafe-sage'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-800 italic">"{review.text}"</p>
              
              {(review.serviceRating || review.foodRating) && (
                <div className="mt-4 pt-4 border-t border-cafe-cream flex gap-4 text-xs text-gray-700">
                  {review.foodRating && <span>Food: {review.foodRating}/5</span>}
                  {review.serviceRating && <span>Service: {review.serviceRating}/5</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;