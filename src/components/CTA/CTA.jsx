import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";

import {
  CTAWrapper,
  CTARow,
  CTAColumn,
  TextContainer,
  TopBlurb,
  Heading,
  SubHeading,
  ImageContainer,
  Img,
} from "./CTA.styles";

const CTA = ({
  primary,
  lightBg,
  topBlurb,
  lightTopBlurb,
  lightHeading,
  lightSubheading,
  heading,
  subheading,
  buttonText,
  img,
  alt,
  imgStart,
  borderRadius,
  start,
}) => {
  return (
    <CTAWrapper lightBg={lightBg}>
      <Container>
        <CTARow imgStart={imgStart}>
          <CTAColumn>
            <TextContainer>
              <TopBlurb lightTopBlurb={lightTopBlurb}>{topBlurb}</TopBlurb>
              <Heading lightHeading={lightHeading}>{heading}</Heading>
              <SubHeading lightSubheading={lightSubheading}>
                {subheading}
              </SubHeading>
              <Link to="/sign-up">
                <Button primary={primary}>{buttonText}</Button>
              </Link>
            </TextContainer>
          </CTAColumn>
          <CTAColumn>
            <ImageContainer start={start}>
              <Img src={img} alt={alt} borderRadius={borderRadius} />
            </ImageContainer>
          </CTAColumn>
        </CTARow>
      </Container>
    </CTAWrapper>
  );
};

export default CTA;
