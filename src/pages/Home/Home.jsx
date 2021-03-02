import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./homeData";
import CTA from "../../components/CTA/CTA";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <CTA {...homeObjOne} />
      <CTA {...homeObjTwo} />
      <CTA {...homeObjThree} />
      <Pricing />
      <CTA {...homeObjFour} />
    </>
  );
};

export default Home;
