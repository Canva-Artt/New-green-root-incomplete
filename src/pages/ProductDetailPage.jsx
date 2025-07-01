
import React from "react";
import { Navigate } from "react-router-dom";

const ProductDetailPageRedirect = () => {
  return <Navigate to="/product" replace />;
};

export default ProductDetailPageRedirect;
