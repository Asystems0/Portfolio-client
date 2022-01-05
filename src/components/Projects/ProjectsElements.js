import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: #fff;
  background: "#f9f9f9";
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 140vh;
  }

  @media screen and (max-width: 480px) {
    height: 150vh;
  }
`;

export const ProjectsRow = styled.div`
  display: grid;
  align-items: center;
  width: 70vw;
  color: #010606;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const Column1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const Column2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const Column3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Hr = styled.hr`
  margin-bottom: 2vh;

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5vh;
  }
`;

export const Row1 = styled.div`
  text-align: center;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Row2 = styled.div`
  text-align: center;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 4vh;
  padding-bottom: 40px;
  text-decoration: underline #87cefa;

  @media screen and (max-width: 768px) {
    padding-top: 15vh;
    max-width: 768px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 15vh;
    max-width: 480px;
  }
`;
export const TopLine = styled.p`
  color: #87cefa;
  font-size: 48px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  transform: translateX(-15%);
  margin: 18px 0 18px 0;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 400;
  color: "#010606";

  @media screen and (max-width: 768px) {
    margin: 5px 0 10px 0;
    transform: translateX(0);
    font-size: 32px;
    width: 85vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  white-space: pre-line;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: "#010606";

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    text-align: center;
    max-width: 768px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: none;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  margin: 10px 0 10px 0;
  padding-right: 0;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 160px;
    margin: 5px 0 5px 0;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.01s ease-in-out;
  }
`;
