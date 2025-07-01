import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { singleProduct } from "@/data/products";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems, getCartTotal } = useCart();

  const totalBottles = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getCartTotal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Oil", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-primary">Green<span className="text-secondary">Roots</span></span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalBottles > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalBottles}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <Button asChild variant="link" className="mt-4">
                      <Link to="/product">Shop Our Oil</Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center py-4 border-b">
                          <div className="h-16 w-16 rounded-md overflow-hidden mr-4">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.quantity} × Rs: {item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t mt-auto">
                      <div className="flex justify-between mb-4">
                        <span>Total</span>
                        <span className="font-bold">
                          Rs: {totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Button asChild className="w-full">
                        <a href={`/order.html?total=${totalPrice}&qty=${totalBottles}`} target="_blank" rel="noopener noreferrer">Checkout</a>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t"
        >
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
