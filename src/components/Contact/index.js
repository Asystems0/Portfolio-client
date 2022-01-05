import React from "react";
import { HashLink } from "react-router-hash-link";

// import { GrCodeSandbox } from "react-icons/gr";

import {
  FaBars,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiPostman } from "react-icons/si";

import Video from "../../videos/Contact.mov";

import {
  ContactContainer,
  Nav,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Container,
  FormWrap,
  FormAndVideoDiv,
  FormComponents,
  HeroBg,
  VideoBg,
  Footer,
  LanguageIcons,
  RightText,
  FindMeIcons,
  SocialIconLink,
} from "./ContactElements";
import FormContact from "./Form";

const Contact = ({ toggle }) => {
  return (
    <>
      <ContactContainer>
        <Nav>
          <Logo to="/">AsaFullStack</Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>
                <HashLink
                  to="/#services"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Services
                </HashLink>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <HashLink
                  to="/#projects"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  Projects
                </HashLink>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <HashLink
                  to="/#about"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  About
                </HashLink>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </Nav>
        <Container>
          <FormWrap>
            <FormAndVideoDiv>
              <FormComponents>
                <FormContact />
              </FormComponents>
              <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
              </HeroBg>
            </FormAndVideoDiv>
          </FormWrap>
        </Container>
        <Footer>
          <LanguageIcons>
            <FaHtml5 style={{ color: "#DD9866" }} />
            <FaCss3 style={{ color: "#1597E5" }} />
            <SiJavascript style={{ color: "#F9D371" }} />
            <FaReact style={{ color: "#84DFFF" }} />
            <SiPostman style={{ color: "#FF7800" }} />
            <FaNodeJs
              style={{
                background: "#B6C867",
                color: "#fff",
                borderRadius: "5px",
              }}
            />
            <FaPython style={{ color: "#000" }} />
          </LanguageIcons>
          <RightText>
            AsaFullStack {new Date().getFullYear()} &copy; All right reserved.
          </RightText>
          <FindMeIcons>
            My Profiles
            <SocialIconLink href="https://github.com/Asystems0" target="_blank">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://il.linkedin.com/in/asafsadika"
              target="_blank"
            >
              <FaLinkedin style={{ color: "#1C6DD0" }} />
            </SocialIconLink>
          </FindMeIcons>
        </Footer>
      </ContactContainer>
    </>
  );
};

export default Contact;
