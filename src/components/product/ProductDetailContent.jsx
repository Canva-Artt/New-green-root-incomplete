
import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductDetailContent = ({ product, isPage }) => {
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-primary">Loading product details...</div>
      </div>
    );
  }
  
  const gridClasses = isPage ? "grid grid-cols-1 md:grid-cols-2 gap-12" : "grid grid-cols-1 md:grid-cols-2 gap-12 container mx-auto px-4";


  return (
    <div className={gridClasses}>
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetailContent;
