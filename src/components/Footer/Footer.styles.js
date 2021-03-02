import styled from "styled-components";

import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const FooterContainer = styled.footer`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 920px) {
    padding: 4rem 1rem 0 1rem;
  }
`;

export const FooterCta = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
`;
export const CtaHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;
export const CtaSubheading = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;
export const CtaInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
export const CtaInput = styled.input`
  border-radius: 4px;
  padding: 10px 20px;
  outline: none;
  border: none;
  margin-right: 1rem;
  font-size: 16px;

  @media screen and (max-width: 430px) {
    margin-right: 0;
    margin-bottom: 0.75rem;
  }
`;
export const CtaButtonLink = styled(Link)`
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h2`
  margin-bottom: 1.1rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const BottomContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 2rem 1rem;

  ${Container};

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export const FooterLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  margin-left: 1rem;
`;

export const FooterIcon = styled(FaMagento)`
  font-size: 2rem;
`;

export const FooterCopy = styled.div`
  font-size: 1rem;
  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const FooterSocialLink = styled(Link)`
  font-size: 2rem;
  color: #fff;
  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
`;
