import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Users, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Import local images
import teamImage from '@/assets/images/team-working.jpg';
import sourcingImage from '@/assets/images/organic-farm.jpg';
import formulationImage from '@/assets/images/laboratory.jpg';
import productionImage from '@/assets/images/bottling-process.jpg';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">About GreenRoots</h1>
          <p className="text-muted-foreground">
            Our journey to create natural hair care solutions that work in harmony with nature
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-full h-auto rounded-lg shadow-lg" alt="GreenRoots team working with natural ingredients" src={teamImage} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            GreenRoots was founded in 2018 by a team of herbalists and scientists who shared a common vision: to create hair care products that harness the power of nature without compromising on effectiveness.
          </p>
          <p className="text-muted-foreground mb-4">
            After years of research and development, we created our first hair oil formula using traditional knowledge combined with modern scientific techniques. The results were remarkable, and we knew we had to share our discovery with the world.
          </p>
          <p className="text-muted-foreground">
            Today, GreenRoots is a leading brand in natural hair care, trusted by thousands of customers worldwide. We remain committed to our founding principles of quality, sustainability, and transparency in everything we do.
          </p>
        </motion.div>
      </div>

      <Separator className="my-16" />

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground">
            The principles that guide everything we do at GreenRoots
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-lg p-6 text-center shadow-sm border border-primary/10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-muted-foreground">
              We source ingredients responsibly and use eco-friendly packaging to minimize our environmental impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg p-6 text-center shadow-sm border border-primary/10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We never compromise on the quality of our ingredients or the effectiveness of our formulas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-lg p-6 text-center shadow-sm border border-primary/10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground">
              We believe in building a community of like-minded individuals who value natural hair care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-lg p-6 text-center shadow-sm border border-primary/10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-muted-foreground">
              All our products are cruelty-free and we donate a portion of our profits to environmental causes.
            </p>
          </motion.div>
        </div>
      </div>

      <Separator className="my-16" />

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground">
            How we create our premium hair oils from plant to bottle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
            <div className="pt-12 pb-6 px-6 bg-card rounded-lg shadow-sm border border-primary/10 text-center h-full">
              <h3 className="text-xl font-semibold mb-4">Sourcing</h3>
              <img className="w-full h-48 object-cover rounded-md mb-4" alt="Organic herb farm" src={sourcingImage} />
              <p className="text-muted-foreground">
                We carefully select the finest organic ingredients from trusted suppliers who share our commitment to sustainability and quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
            <div className="pt-12 pb-6 px-6 bg-card rounded-lg shadow-sm border border-primary/10 text-center h-full">
              <h3 className="text-xl font-semibold mb-4">Formulation</h3>
              <img className="w-full h-48 object-cover rounded-md mb-4" alt="Laboratory formulation" src={formulationImage} />
              <p className="text-muted-foreground">
                Our team of experts combines traditional knowledge with modern science to create effective formulas that deliver real results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
            <div className="pt-12 pb-6 px-6 bg-card rounded-lg shadow-sm border border-primary/10 text-center h-full">
              <h3 className="text-xl font-semibold mb-4">Production</h3>
              <img className="w-full h-48 object-cover rounded-md mb-4" alt="Bottling process" src={productionImage} />
              <p className="text-muted-foreground">
                Each batch is carefully produced in small quantities to ensure quality control, then packaged in eco-friendly materials.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/10 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Join the GreenRoots Family</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Experience the difference that natural, thoughtfully crafted hair oils can make for your hair health and appearance.
        </p>
        <a href="/products" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
          Shop Our Collection
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;
