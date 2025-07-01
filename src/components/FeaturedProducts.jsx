
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { singleProduct } from "@/data/products";
import ProductCard from "@/components/ProductCard"; 

const FeaturedProducts = () => {
  if (!singleProduct) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Our Signature Hair Oil</h2>
            <p className="text-muted-foreground mt-2">
              Experience the best nature has to offer for your hair.
            </p>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/product">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <ProductCard product={singleProduct} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
