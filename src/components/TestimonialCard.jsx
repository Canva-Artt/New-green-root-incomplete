
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="testimonial-card"
    >
      <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">{testimonial.name}</h4>
              <div className="flex text-yellow-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "fill-current" : "fill-none"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
