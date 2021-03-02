import React from "react";
import CTA from "../../components/CTA/CTA";
import Pricing from "../../components/Pricing/Pricing";
import { servicesObjOne, servicesObjThree } from "./servicesData";

function Services() {
  return (
    <>
      <Pricing />
      <CTA {...servicesObjOne} />
      <CTA {...servicesObjThree} />
    </>
  );
}

export default Services;
