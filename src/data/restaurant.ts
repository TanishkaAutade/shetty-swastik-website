import { Restaurant, Dish, MenuItem, Feature, GalleryImage } from "../types";

export const RESTAURANT_INFO: Restaurant = {
  name: "Hotel Shetty's Swastik - Veg Treat",
  marathiName: "होटल शेट्टी'स स्वास्तिक- वेज ट्रीट",
  tagline: "Pure Vegetarian",
  address:
    "Hotel Swastik Food Mall, Nagar Manmad Hwy, near Jangali Maharaj Ashram, Kopargaon, Maharashtra 423601",
  phone: "073503 33222",
  phoneLink: "tel:+91750333222",
  googleMapsUrl:
    "https://www.google.com/maps/place/Hotel+Shetty's+Swastik-+Veg+Treat/",
  rating: 4.5,
  reviewCount: 9808,
};

export const SIGNATURE_DISHES: Dish[] = [
  {
    name: "Special Kolhapuri Misal Pav",
    tag: "Signature Favourite",
    category: "Maharashtrian",
  },
  {
    name: "Rumali Khakra",
    tag: "Must Try",
    category: "Snacks",
  },
  {
    name: "Sev Bhaji",
    tag: "Guest Favourite",
    category: "Maharashtrian",
  },
];

export const MENU_CATEGORIES = [
  "All",
  "Signature",
  "Maharashtrian",
  "Punjabi",
  "Paneer",
  "Chinese & Tandoori",
  "South Indian & Snacks",
  "Thali, Breads & Desserts",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export interface MenuItemWithPrice extends MenuItem {
  price: number;
  description?: string;
  menuCategory: Exclude<MenuCategory, "All">;
}

export const MENU_ITEMS: MenuItemWithPrice[] = [
  // SIGNATURE (6)
  { name: "Special Kolhapuri Misal Pav", category: "Maharashtrian", menuCategory: "Signature", price: 169, description: "Spicy Kolhapuri-style misal served with soft pav" },
  { name: "Rumali Khakra", category: "Snacks", menuCategory: "Signature", price: 140, description: "Thin, crisp, hand-rolled khakra" },
  { name: "Sev Bhaji", category: "Maharashtrian", menuCategory: "Signature", price: 150, description: "Comforting Maharashtrian curry topped with crunchy sev" },
  { name: "Swastik Special Veg", category: "Paneer", menuCategory: "Signature", price: 290, description: "House special mixed vegetable delight" },
  { name: "Paneer Mushroom Handi", category: "Paneer", menuCategory: "Signature", price: 295, description: "Paneer and mushroom slow-cooked in a rich handi gravy" },
  { name: "Swastik Special Kolhapuri", category: "Maharashtrian", menuCategory: "Signature", price: 235, description: "Signature Kolhapuri-style preparation with bold spices" },

  // MAHARASHTRIAN (8)
  { name: "Pithla Bhakri", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 130, description: "Traditional gram flour curry with rustic bhakri" },
  { name: "Zunka Bhakar", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 130, description: "Classic Maharashtrian zunka with bhakri" },
  { name: "Kothimbir Vadi", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 130, description: "Steamed and fried coriander fritters" },
  { name: "Sabudana Vada", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 89, description: "Crispy sago pearl fritters" },
  { name: "Sabudana Khichdi", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 85, description: "Light, flavourful sago khichdi" },
  { name: "Bharli Vangi", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 135, description: "Stuffed baby brinjals in Maharashtrian masala" },
  { name: "Masala Bhaat", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 130, description: "Fragrant Maharashtrian spiced rice" },
  { name: "Kanda Poha", category: "Maharashtrian", menuCategory: "Maharashtrian", price: 70, description: "Classic Maharashtrian poha with onion" },

  // PUNJABI (10)
  { name: "Paneer Butter Masala", category: "Punjabi", menuCategory: "Punjabi", price: 275, description: "Cottage cheese in rich tomato-butter gravy" },
  { name: "Paneer Tikka Masala", category: "Punjabi", menuCategory: "Punjabi", price: 295, description: "Grilled paneer tikka in spiced gravy" },
  { name: "Dal Makhani", category: "Punjabi", menuCategory: "Punjabi", price: 250, description: "Slow-cooked black lentils in creamy gravy" },
  { name: "Dal Tadka", category: "Punjabi", menuCategory: "Punjabi", price: 195, description: "Yellow dal tempered with spices" },
  { name: "Veg Kofta", category: "Punjabi", menuCategory: "Punjabi", price: 220, description: "Vegetable dumplings in rich gravy" },
  { name: "Veg Kolhapuri", category: "Punjabi", menuCategory: "Punjabi", price: 220, description: "Mixed vegetables in fiery Kolhapuri masala" },
  { name: "Methi Malai Mutter", category: "Punjabi", menuCategory: "Punjabi", price: 280, description: "Fenugreek and peas in creamy sauce" },
  { name: "Malai Kofta", category: "Punjabi", menuCategory: "Punjabi", price: 220, description: "Creamy dumplings in mild gravy" },
  { name: "Shahi Paneer", category: "Punjabi", menuCategory: "Punjabi", price: 270, description: "Royal paneer preparation with cashew gravy" },
  { name: "Veg Diwani Handi", category: "Punjabi", menuCategory: "Punjabi", price: 260, description: "Mixed veggies in rich handi gravy" },

  // PANEER (10)
  { name: "Paneer Bhurji", category: "Paneer", menuCategory: "Paneer", price: 215, description: "Scrambled paneer with spices" },
  { name: "Paneer Pasanda", category: "Paneer", menuCategory: "Paneer", price: 240, description: "Stuffed paneer in creamy gravy" },
  { name: "Paneer Amritsari", category: "Paneer", menuCategory: "Paneer", price: 240, description: "Amritsari-style spiced paneer" },
  { name: "Paneer Chatpata", category: "Paneer", menuCategory: "Paneer", price: 220, description: "Tangy and spicy paneer" },
  { name: "Paneer Kadai", category: "Paneer", menuCategory: "Paneer", price: 240, description: "Paneer cooked in kadai masala with peppers" },
  { name: "Paneer Lababdar", category: "Paneer", menuCategory: "Paneer", price: 240, description: "Rich, creamy paneer in tomato-based gravy" },
  { name: "Palak Paneer", category: "Paneer", menuCategory: "Paneer", price: 230, description: "Paneer cubes in smooth spinach gravy" },
  { name: "Paneer Tikka Masala", category: "Paneer", menuCategory: "Paneer", price: 295, description: "Tandoori paneer tikka in spicy gravy" },
  { name: "Paneer Tawa Masala", category: "Paneer", menuCategory: "Paneer", price: 220, description: "Paneer cooked on tawa with masala" },
  { name: "Paneer Angara", category: "Paneer", menuCategory: "Paneer", price: 220, description: "Smoky, fiery paneer preparation" },

  // CHINESE & TANDOORI (8)
  { name: "Veg Manchurian Dry", category: "Chinese", menuCategory: "Chinese & Tandoori", price: 219, description: "Crispy vegetable balls in Manchurian sauce" },
  { name: "Veg Crispy", category: "Chinese", menuCategory: "Chinese & Tandoori", price: 249, description: "Crispy fried mixed vegetables" },
  { name: "Paneer Chilli Dry", category: "Chinese", menuCategory: "Chinese & Tandoori", price: 259, description: "Paneer tossed with peppers in chilli sauce" },
  { name: "Hakka Noodles", category: "Chinese", menuCategory: "Chinese & Tandoori", price: 175, description: "Classic Indo-Chinese noodles" },
  { name: "Schezwan Noodles", category: "Chinese", menuCategory: "Chinese & Tandoori", price: 185, description: "Spicy Schezwan-style noodles" },
  { name: "Triple Schezwan Fried Rice", category: "Chinese", menuCategory: "Chinese & Tandoori", price: 260, description: "Schezwan rice, noodles, and gravy combo" },
  { name: "Paneer Tikka", category: "Tandoori", menuCategory: "Chinese & Tandoori", price: 249, description: "Marinated grilled cottage cheese" },
  { name: "Mushroom Tikka", category: "Tandoori", menuCategory: "Chinese & Tandoori", price: 249, description: "Tandoori grilled mushrooms" },

  // SOUTH INDIAN & SNACKS (5)
  { name: "Masala Dosa", category: "South Indian", menuCategory: "South Indian & Snacks", price: 110, description: "Crispy dosa with spiced potato filling" },
  { name: "Plain Dosa", category: "South Indian", menuCategory: "South Indian & Snacks", price: 90, description: "Classic crisp dosa" },
  { name: "Uttapam", category: "South Indian", menuCategory: "South Indian & Snacks", price: 120, description: "Thick savoury pancake with toppings" },
  { name: "Veg Sandwich", category: "Snacks", menuCategory: "South Indian & Snacks", price: 80, description: "Fresh vegetable sandwich" },
  { name: "Veg Cheese Grill Sandwich", category: "Snacks", menuCategory: "South Indian & Snacks", price: 140, description: "Grilled sandwich with cheese and veggies" },

  // THALI, BREADS & DESSERTS (12)
  { name: "Special Punjabi Thali", category: "Thali", menuCategory: "Thali, Breads & Desserts", price: 339, description: "Complete Punjabi meal with veg, dal, rice, roti, sweet & more" },
  { name: "Special Maharashtrian Thali", category: "Thali", menuCategory: "Thali, Breads & Desserts", price: 339, description: "Authentic Maharashtrian thali with traditional delicacies" },
  { name: "Special South Indian Thali", category: "Thali", menuCategory: "Thali, Breads & Desserts", price: 339, description: "South Indian platter with rice, sambhar, rasam & more" },
  { name: "Butter Roti", category: "Breads", menuCategory: "Thali, Breads & Desserts", price: 25 },
  { name: "Butter Naan", category: "Breads", menuCategory: "Thali, Breads & Desserts", price: 60 },
  { name: "Garlic Naan", category: "Breads", menuCategory: "Thali, Breads & Desserts", price: 90 },
  { name: "Lachha Paratha", category: "Breads", menuCategory: "Thali, Breads & Desserts", price: 65 },
  { name: "Falooda", category: "Desserts", menuCategory: "Thali, Breads & Desserts", price: 140, description: "Chilled rose falooda with ice cream" },
  { name: "Mango Mastani", category: "Desserts", menuCategory: "Thali, Breads & Desserts", price: 95, description: "Thick mango shake topped with ice cream" },
  { name: "Kesar Pista Mastani", category: "Desserts", menuCategory: "Thali, Breads & Desserts", price: 105, description: "Saffron-pistachio thick shake" },
  { name: "Gulab Jamun", category: "Desserts", menuCategory: "Thali, Breads & Desserts", price: 60, description: "Soft milk dumplings in sugar syrup" },
  { name: "Masala Papad", category: "Snacks", menuCategory: "Thali, Breads & Desserts", price: 55, description: "Crisp papad topped with spiced onion and tomato" },
];

export const FEATURES: Feature[] = [
  { title: "Pure Vegetarian" },
  { title: "Maharashtrian & Punjabi Flavours" },
  { title: "Quick Service" },
  { title: "Ample Parking" },
  { title: "Clean & Comfortable" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/gallery/misal-pav.jpg", alt: "Special Kolhapuri Misal Pav" },
  { src: "/images/gallery/rumali-khakra.jpg", alt: "Crispy Rumali Khakra" },
  { src: "/images/gallery/sev-bhaji.jpg", alt: "Spicy Sev Bhaji" },
  { src: "/images/gallery/dosa.jpg", alt: "Crispy South Indian Dosa" },
  { src: "/images/gallery/falooda.jpg", alt: "Refreshing Falooda Dessert" },
  { src: "/images/gallery/restaurant-exterior.jpg", alt: "Hotel Shetty's Swastik Exterior" },
  { src: "/images/gallery/restaurant-interior-1.jpg", alt: "Comfortable Dining Area" },
  { src: "/images/gallery/restaurant-interior-2.jpg", alt: "Family Seating Arrangement" },
  { src: "/images/gallery/parking-area.jpg", alt: "Ample Parking Space" },
];