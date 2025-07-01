import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Badge variant="outline" className="mb-2">
          {product.category}
        </Badge>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-current" : "fill-none stroke-current"
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            {product.originalPrice && (
              <span className="text-muted-foreground line-through mr-2">
                Rs: {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-2xl font-bold">Rs: {product.price.toFixed(2)}</span>
            {product.discount > 0 && (
              <Badge variant="destructive" className="ml-2">
                Save Rs: {(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6">
          {product.description}
        </p>
        
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="mr-4">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-10 w-10"
              >
                -
              </Button>
              <span className="w-10 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-10 w-10"
              >
                +
              </Button>
            </div>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
        
        <div className="flex flex-col space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <Check className="h-4 w-4 text-primary mr-2" />
            <span>100% Organic Ingredients</span>
          </div>
          <div className="flex items-center text-sm">
            <Check className="h-4 w-4 text-primary mr-2" />
            <span>Free from harmful chemicals</span>
          </div>
          <div className="flex items-center text-sm">
            <Check className="h-4 w-4 text-primary mr-2" />
            <span>Cruelty-free and vegan</span>
          </div>
          <div className="flex items-center text-sm">
            <Check className="h-4 w-4 text-primary mr-2" />
            <span>Free shipping on orders over $50</span>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="ingredients">
            <AccordionTrigger>
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-2" />
                Ingredients
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="how-to-use">
            <AccordionTrigger>
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-2" />
                How to Use
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>{product.usage}</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="benefits">
            <AccordionTrigger>
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-2" />
                Benefits
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
