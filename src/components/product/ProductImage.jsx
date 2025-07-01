
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ProductImage = ({ product }) => {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="sticky top-24 rounded-lg overflow-hidden border">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover aspect-square"
        />
        {product.isNew && (
          <Badge variant="accent" className="absolute top-4 right-4">
            New
          </Badge>
        )}
        {product.discount > 0 && (
          <Badge variant="destructive" className="absolute top-4 left-4">
            {product.discount}% OFF
          </Badge>
        )}
      </div>
    </motion.div>
  );
};

export default ProductImage;
