import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  right: 4.5vw;
  background: #30475e;
  max-width: 32vw;
  height: 84vh;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 2.2vh 3vw;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 1024px) {
    max-width: 90vw;
    right: 0;
  }
`;

export const FormH1 = styled.h1`
  color: #fff;
  margin-bottom: 4vh;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`;

export const RegisterMessage = styled.h3`
  color: ${({ messageColor }) =>
    messageColor === "#7fb285" ? "#7fb285" : "#e84949"};

  text-align: center;
  text-transform: capitalize;
  display: ${({ registerMsg }) => (registerMsg ? "block" : "none")};
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5vw;
  font-size: 16px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 0.75vh 1vw;
  margin-bottom: 1.5vh;
  border: none;
  border-radius: 4px;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    padding: 2px 2px;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 4vh 0.1vw;
  text-align: center;
  margin-bottom: 1.5vh;
  border: none;
  border-radius: 4px;
  font-size: 16px;

  @media screen and (max-width: 480px) {
    padding: 2px 2px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 5vh;
  }
`;

export const AreaAndPhoneDiv = styled.div`
  display: grid;
  grid-template-columns: 7vw 19vw;
`;
export const AreaPhoneNumber = styled.select`
  text-align: center;
  height: 5vh;
  margin-right: 1vw;
  border-radius: 4px;
  font-size: 20px;

  @media screen and (max-width: 1400px) {
    height: 9vh;
  }

  @media screen and (max-width: 1024px) {
    height: 7vh;
    width: 15vw;
  }
`;

export const PhoneInput = styled.input`
  height: 5vh;
  margin-bottom: 2vh;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;

  &:focus {
    letter-spacing: 1vw;
  }

  @media screen and (max-width: 1400px) {
    height: 9vh;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 11vw;
    margin-bottom: 0vh;
    width: 66vw;
    height: 7vh;
  }
`;

export const FormButton = styled.input`
  background: #000;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    font-size: 28px;
  }
`;
