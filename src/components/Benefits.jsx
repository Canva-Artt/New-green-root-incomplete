
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: <Leaf className="h-10 w-10" />,
    title: "100% Organic",
    description: "All our hair oils are made with certified organic ingredients, free from harmful chemicals."
  },
  {
    icon: <Droplets className="h-10 w-10" />,
    title: "Deep Nourishment",
    description: "Our formulas penetrate deep into hair follicles to provide essential nutrients."
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Scalp Protection",
    description: "Natural antibacterial properties help maintain a healthy scalp environment."
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Quality Guaranteed",
    description: "Each batch is tested for quality and effectiveness before reaching you."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose GreenRoots?</h2>
            <p className="text-muted-foreground">
              Our hair oils are crafted with care to provide the best natural solution for your hair needs
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 text-center shadow-sm border border-primary/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
