// Import local images
import hairOilImage from '@/assets/images/hair-oil-product.jpg';

export const products = [
  {
    id: 1,
    name: "GreenRoots Signature Hair Oil",
    description: "Our premium, all-natural hair oil blend, meticulously crafted with rosemary, peppermint, and castor oil to stimulate hair follicles, nourish the scalp, and promote healthy, vibrant hair growth. Suitable for all hair types.",
    price: 1000, // Rs: 1000
    image: hairOilImage, // Imported image from assets
    category: "Hair Care",
    featured: true,
    isNew: true,
    discount: 0,
    rating: 4.9,
    reviews: 157,
    ingredients: ["Organic Mustard Oil", "Rosemary Essential Oil", "Coconut Essential Oil", "Aloe-Vera", "Kalonji", "Vitamin E", "Methi Daana","Amla","Reetha"],
    size: "200ml",
    usage: "Apply 5-10 drops directly to the scalp and massage gently for 2-3 minutes. For best results, use 2-3 times per week. Can also be applied to hair lengths and ends for added nourishment. Leave on for at least 30 minutes or overnight before washing.",
    benefits: [
      "Stimulates robust hair growth", 
      "Deeply nourishes and strengthens hair follicles", 
      "Improves scalp circulation and health", 
      "Helps prevent hair loss and thinning",
      "Adds natural shine and softness",
      "Reduces dandruff and dry scalp"
    ],
    guarantee: "10-day satisfaction guarantee"
  }
];

export const singleProduct = products[0];
