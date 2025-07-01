
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes GreenRoots hair oils different?",
    answer: "Our hair oils are made with 100% organic ingredients, carefully sourced and processed to maintain their natural properties. We don't use any synthetic additives, preservatives, or fragrances, making our products suitable for all hair types, including sensitive scalps."
  },
  {
    question: "How often should I use the hair oil?",
    answer: "For best results, we recommend using our hair oil 2-3 times per week. Apply a small amount to your scalp and hair, massage gently, and leave it on for at least 30 minutes before washing. For deep conditioning, you can leave it overnight."
  },
  {
    question: "Are your products tested on animals?",
    answer: "No, GreenRoots is proudly cruelty-free. We never test our products on animals and only use ethically sourced ingredients."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary depending on your location. For international deliveries contact us at whatsapp number +92 329 4660128"
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 10-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return the unused portion for a full refund or exchange."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our products and services
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
