import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  //   FooterLinksContainer,
  //   FooterLinksWrapper,
  //   FooterLinkItems,
  //   FooterLinkTitle,
  //   FooterLink,
  SocialMedia,
  SocailMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocailMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              AsaFullStack
            </SocialLogo>
            <WebSiteRights>
              AsaFullStack {new Date().getFullYear()} &copy; All right reserved.
            </WebSiteRights>
            <SocialIcons>
              <SocialIconLink herf="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocailMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
