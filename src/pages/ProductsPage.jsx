
import React from "react";
import { Navigate } from "react-router-dom";

const ProductsPageRedirect = () => {
  return <Navigate to="/product" replace />;
};

export default ProductsPageRedirect;
