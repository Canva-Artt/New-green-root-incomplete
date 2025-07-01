
import React from "react";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FAQSection from "@/components/FAQSection";
import { singleProduct } from "@/data/products";
import ProductDetailContent from "@/components/product/ProductDetailContent";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="py-16">
        <ProductDetailContent product={singleProduct} isPage={false}/>
      </div>
      <Benefits />
      <Testimonials />
      <Newsletter />
      <FAQSection />
    </div>
  );
};

export default HomePage;
