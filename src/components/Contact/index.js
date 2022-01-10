import React from "react";
import { HashLink } from "react-router-hash-link";

import {
  FaBars,
  FaCss3,
  FaGithub,
  FaHome,
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
  PhoneContainer,
  PhoneFormWrap,
  PhoneVideo,
  PhoneForm,
} from "./ContactElements";
import FormContact from "./Form";
import { Link } from "react-router-dom";

const Contact = ({ toggle }) => {
  return (
    <>
      <ContactContainer>
        <Nav>
          <Logo to="/">AsaFullStack</Logo>
          <MobileIcon onClick={toggle}>
            <Link to="/">
              <FaHome style={{ color: "#000" }} />
            </Link>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>
                <HashLink
                  to="/#services"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Services
                </HashLink>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <HashLink
                  to="/#projects"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Projects
                </HashLink>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <HashLink
                  to="/#about"
                  style={{ color: "#fff", textDecoration: "none" }}
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
        <PhoneContainer>
          <PhoneFormWrap>
            <PhoneVideo>
              <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </PhoneVideo>
            <PhoneForm>
              <FormContact />
            </PhoneForm>
          </PhoneFormWrap>
        </PhoneContainer>
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
