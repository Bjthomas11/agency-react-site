import React from "react";
import CTA from "../../components/CTA/CTA";
import { productsObjOne, productsObjTwo } from "./productsData";

const Products = () => {
  return (
    <>
      <CTA {...productsObjOne} />
      <CTA {...productsObjTwo} />
    </>
  );
};

export default Products;
