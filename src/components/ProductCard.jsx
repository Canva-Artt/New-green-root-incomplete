import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="product-card group relative overflow-hidden rounded-lg border bg-card"
    >
      <Link to={`/product`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.isNew && (
            <Badge variant="accent" className="absolute top-2 right-2">
              New
            </Badge>
          )}
          {product.discount > 0 && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <div className="flex items-center mt-1">
            {product.originalPrice && (
              <span className="text-muted-foreground line-through mr-2">
                Rs: {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-semibold">Rs: {product.price.toFixed(2)}</span>
          </div>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
      
      <div className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full mt-2 group-hover:bg-primary"
          variant="secondary"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
