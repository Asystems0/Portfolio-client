import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  background: #fff;
`;

export const Nav = styled.nav`
  background: #fff;
  height: 5vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1400px) {
    height: 6.5vh;
  }
`;

export const Logo = styled(Link)`
  margin-left: 32px;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 32px;
  width: 13%;

  /* &:hover {
    color: #30475e;
  } */

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 16px;
    width: 13%;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    max-height: 100vh;
    color: #000;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 45%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NavLinks = styled.p`
  color: #000;
  font-size: 16px;
  cursor: pointer;
  padding: 0.35vw;
  text-decoration: none;
  border: 2px solid #000;
  border-radius: 20px;
  background: transparent;

  &:hover {
    border: 2px solid #fff;
    background: #000;
    color: #fff;
  }
`;

export const Container = styled.div`
  /* min-height: 692px; */
  height: 90vh;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #c9ccd5;

  @media screen and (max-width: 1400px) {
    height: 87.5vh;
  }

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    height: 120vh;
  }

  @media screen and (max-width: 480px) {
    max-width: 100vw;
    height: 130vh;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 70%;
  }

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormAndVideoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas: "col2 col1";
  }
`;

export const FormComponents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const HeroBg = styled.div`
  position: relative;
  right: 4vw;
  @media screen and (max-width: 1024px) {
    position: absolute;
    height: 70vh;
    max-width: 100vw;
    right: 0;
    transform: translate(-5%, -5%);
  }
  @media screen and (max-width: 768px) {
    transform: translate(-5%, -5%);
  }
  @media screen and (max-width: 480px) {
    transform: translate(-5%, -10%);
  }

  @media screen and (max-width: 375px) {
    transform: translate(-5%, -20%);
  }
`;

export const VideoBg = styled.video`
  width: 45vw;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 90vw;
  }

  /* 
  @media screen and (max-width: 1024px) {
    width: 90vw;
    height: 36vh;
  }

  @media screen and (max-width: 768px) {
    height: 30vh;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    height: 28vh;
  }

  @media screen and (max-width: 375px) {
    width: 90vw;
    height: 24vh;
  }
  @media screen and (max-width: 360px) {
    width: 90vw;
    height: 28vh;
  } */
`;

export const Footer = styled.footer`
  background: #fff;
  height: 5vh;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    max-width: 90vw;
    grid-template-columns: 1fr;
    padding-top: 16px;
  }
`;

export const LanguageIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  right: 10vw;
  font-size: 24px;

  @media screen and (max-width: 1400px) {
    right: 0;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 16px;
  }
`;
export const RightText = styled.div`
  font-size: 16px;
  margin-top: auto;
  @media screen and (max-width: 768px) {
    padding-bottom: 16px;
  }
`;
export const FindMeIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  left: 20vw;
  font-family: "Encode Sans Expanded", sans-serif;
  font-family: "Pushster", cursive;

  @media screen and (max-width: 1400px) {
    left: 0;
  }
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 28px;
  cursor: pointer;
  margin-left: 1vw;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`;
