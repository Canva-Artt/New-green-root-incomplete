import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import ProductDetailPageRedirect from "@/pages/ProductDetailPage"; 
import ProductsPageRedirect from "@/pages/ProductsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/products" element={<ProductsPageRedirect />} />
              <Route path="/products/:id" element={<ProductDetailPageRedirect />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </Router>
    </CartProvider>
  );
}

export default App;
