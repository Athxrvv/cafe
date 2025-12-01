import { BusinessInfo, MenuItem, Review } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "The Roadhouse Café",
  hindiName: "द रोअधौसे कैफे",
  address: "Shop No. 6, Dwarka Height, Kolhe Mala",
  city: "Narayangaon",
  state: "Maharashtra",
  zip: "410504",
  plusCode: "4XGF+FX Narayangaon, Maharashtra",
  timings: "Open Daily – 11:00 AM to 11:00 PM",
  phone: "+91 99999 99999", // Placeholder
  whatsapp: "919999999999", // Placeholder
  rating: 4.0,
  reviewCount: 3,
  googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.645963248888!2d73.9781653!3d19.1231782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1b7b0933758b%3A0x6e2c366879854727!2sNarayangaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", // Generic Narayangaon map
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  }
};

export const MENU_CATEGORIES = ["All", "Signature", "Combos", "Snacks", "Fast Food", "Beverages", "Coffee", "Desserts"];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Classic Cold Coffee",
    category: "Coffee",
    description: "Rich espresso blended with vanilla ice cream and milk.",
    price: "₹ 140",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Veggie Supreme Burger",
    category: "Fast Food",
    description: "Crispy vegetable patty with fresh lettuce, cheese, and special sauce.",
    price: "₹ 180",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Masala Fries",
    category: "Snacks",
    description: "Crispy french fries tossed in a spicy house blend masala.",
    price: "₹ 120",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Cappuccino",
    category: "Coffee",
    description: "Steamed milk foam over a shot of rich espresso.",
    price: "₹ 150",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Paneer Grill Sandwich",
    category: "Snacks",
    description: "Grilled sandwich stuffed with marinated paneer and veggies.",
    price: "₹ 160",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Blue Lagoon",
    category: "Beverages",
    description: "Refreshing blue curaçao mocktail with lemon and mint.",
    price: "₹ 130",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "7",
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Warm chocolate brownie served with chocolate sauce.",
    price: "₹ 190",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "Margherita Pizza",
    category: "Fast Food",
    description: "Classic cheese pizza with basil and tomato sauce.",
    price: "₹ 220",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "9",
    name: "Roadhouse Platter",
    category: "Signature",
    description: "An assortment of our best snacks, dips, and sides.",
    price: "₹ 450",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "10",
    name: "Hazelnut Frappe",
    category: "Signature",
    description: "Premium hazelnut infused cold coffee topped with whipped cream.",
    price: "₹ 210",
    image: "https://images.unsplash.com/photo-1563805909946-28875151f0fb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "11",
    name: "Burger + Fries + Coke",
    category: "Combos",
    description: "The classic meal deal. Veg burger, medium fries and a cold cola.",
    price: "₹ 299",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Aditi S.",
    rating: 5,
    text: "Awesome taste and ambiance ❤️. A hidden gem in Narayangaon!",
    date: "1 month ago"
  },
  {
    id: "r2",
    author: "Rahul M.",
    rating: 4,
    text: "Good food, value for money. The coffee is really good.",
    date: "2 months ago"
  },
  {
    id: "r3",
    author: "Anonymous User",
    rating: 3,
    text: "Food was okay, but service was a bit slow during rush hours.",
    serviceRating: 1,
    foodRating: 3,
    date: "Recent"
  }
];