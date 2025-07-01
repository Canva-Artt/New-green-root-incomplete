
import React from "react";
import { motion } from "framer-motion";
import { singleProduct } from "@/data/products";
import ProductDetailContent from "@/components/product/ProductDetailContent";

const ProductPage = () => {
  if (!singleProduct) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-muted-foreground">The product information is currently unavailable.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
        >
            <h1 className="text-4xl font-bold mb-4">Our Signature Hair Oil</h1>
            <p className="text-muted-foreground">
            Discover the natural power of GreenRoots for vibrant, healthy hair.
            </p>
        </motion.div>
        <ProductDetailContent product={singleProduct} isPage={true} />
    </div>
  );
};

export default ProductPage;
