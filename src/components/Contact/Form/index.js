import React, { useState } from "react";
import axios from "axios";

import {
  Form,
  FormH1,
  RegisterMessage,
  FormLabel,
  FormInput,
  AreaAndPhoneDiv,
  AreaPhoneNumber,
  PhoneInput,
  FormButton,
} from "./FormElements.js";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    areaNumber: "02",
    phone: "",
  });

  const [registerMsg, setRegisterMsg] = useState(false);
  const [messageColor, setMessageColor] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const { name, email, areaNumber, phone } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputError = (msg) => {
    setUserMessage(msg);
    setMessageColor("#e84949");
    setRegisterMsg(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 2) {
      inputError("The name can not be less than 2 characters");
      return;
    }
    if (name.length > 20) {
      inputError("The name can not be longer than 20 characters");
      return;
    }
    if (email.length < 6) {
      inputError("The email cannot be less than 6 characters long");
      return;
    }
    if (email.length > 32) {
      inputError("The email cannot be longer than 32 characters");
      return;
    }

    const data = {
      name,
      email,
      phone: areaNumber + phone,
    };

    try {
      const res = await axios.post(
        "https://asafullstack.herokuapp.com/contact",
        data
      );
      if (res.status === 200) {
        console.log(res);
        setFormData({ name: "", email: "", areaNumber: "02", phone: "" });
        setUserMessage(`${res.data.msg}, thank you for registering`);
        setMessageColor("#7fb285");
        setRegisterMsg(true);
      }
    } catch (err) {
      console.log(err.response.data.msg);
      setUserMessage(err.response.data.msg);
      setMessageColor("#e84949");
      setRegisterMsg(true);
    }
    e.target.reset();
    setTimeout(() => setUserMessage(""), 5000);
  };
  return (
    <>
      <Form onSubmit={(e) => onSubmit(e)}>
        <FormH1>Get Contact!</FormH1>
        <RegisterMessage registerMsg={registerMsg} messageColor={messageColor}>
          {userMessage}
        </RegisterMessage>
        <FormLabel htmlFor="for">Your name:</FormLabel>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          min={6}
          max={16}
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
        <FormLabel htmlFor="for">Your email:</FormLabel>
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <FormLabel htmlFor="for">Your phone:</FormLabel>

        <AreaAndPhoneDiv>
          <AreaPhoneNumber
            name="areaNumber"
            value={areaNumber}
            onChange={(e) => onChange(e)}
            required
          >
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="050">050</option>
            <option value="051">051</option>
            <option value="052">052</option>
            <option value="053">053</option>
            <option value="054">054</option>
            <option value="055">055</option>
            <option value="056">056</option>
            <option value="058">058</option>
            <option value="059">059</option>
          </AreaPhoneNumber>

          <PhoneInput
            type="tel"
            placeholder="Number"
            maxLength={7}
            name="phone"
            value={phone}
            onChange={(e) => onChange(e)}
            pattern="[0-9]{7}"
            required
          />
        </AreaAndPhoneDiv>
        <FormButton type="submit" value="Join Us" />
      </Form>
    </>
  );
};

export default FormContact;
