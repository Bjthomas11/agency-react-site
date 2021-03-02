import React from "react";
import { Button } from "../../globalStyles";

import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";

import { IconContext } from "react-icons/lib";

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.styles";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Plan</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>/per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                  <Button primary>Choose Plan</Button>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>/per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                  <Button primary>Choose Plan</Button>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$1999.99</PricingCardCost>
                <PricingCardLength>/per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                  <Button primary>Choose Plan</Button>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
