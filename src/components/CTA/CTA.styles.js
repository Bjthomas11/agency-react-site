import styled from "styled-components";

export const CTAWrapper = styled.div`
  color: #fff;
  padding: 160px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;
export const CTAColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
  flex: 1;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const CTARow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;
export const TextContainer = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
export const TopBlurb = styled.div`
  color: ${({ lightTopBlurb }) => (lightTopBlurb ? "#a9b3c1" : "#4b59f7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightHeading }) => (lightHeading ? "#f7f8fa" : "#1c2237")};
`;
export const SubHeading = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightSubheading }) => (lightSubheading ? "#a9b3c1" : "#1c2237")};
`;
export const ImageContainer = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const Img = styled.img`
  padding-right: 0;
  border: none;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: ${({ borderRadius }) => (borderRadius ? "8px" : "0px")};
`;
