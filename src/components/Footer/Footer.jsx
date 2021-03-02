import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { Button } from "../../globalStyles";

import {
  FooterContainer,
  FooterCta,
  CtaHeading,
  CtaSubheading,
  CtaInputContainer,
  CtaInput,
  CtaButtonLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  BottomContainer,
  LogoContainer,
  FooterLogo,
  FooterIcon,
  FooterCopy,
  FooterSocialContainer,
  FooterSocialLink,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCta>
        <CtaHeading>
          Join our exclusive membership to receive the latest news and trends
        </CtaHeading>
        <CtaSubheading>You can unsubscribe at any time.</CtaSubheading>
        <CtaInputContainer>
          <CtaInput type="email" placeholder="Email" />
          <CtaButtonLink to="/sign-up">
            <Button primary>Subscribe</Button>
          </CtaButtonLink>
        </CtaInputContainer>
      </FooterCta>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <BottomContainer>
        <LogoContainer>
          <FooterIcon />
          <FooterLogo to="/">Ultra</FooterLogo>
        </LogoContainer>
        <FooterCopy>ULTRA &copy; {new Date().getFullYear()}</FooterCopy>
        <FooterSocialContainer>
          <FooterSocialLink to="/">
            <AiFillLinkedin />
          </FooterSocialLink>
          <FooterSocialLink to="/">
            <AiFillTwitterCircle />
          </FooterSocialLink>
          <FooterSocialLink to="/">
            <AiFillInstagram />
          </FooterSocialLink>
          <FooterSocialLink to="/">
            <AiFillFacebook />
          </FooterSocialLink>
          <FooterSocialLink to="/">
            <AiFillYoutube />
          </FooterSocialLink>
        </FooterSocialContainer>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
