import styled from "styled-components";

export const FindMeIcons = styled.div`
  position: fixed;
  top: 85vh;
  padding: 5px;
  margin-left: 20px;
  z-index: 1;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  font-family: "Encode Sans Expanded", sans-serif;
  font-family: "Pushster", cursive;

  @media screen and (max-width: 1400px) {
    left: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`;
