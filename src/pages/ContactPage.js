import React, { useState } from "react";
import Contact from "../components/Contact";
import Sidebar from "../components/Contact/Sidebar";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Contact toggle={toggle} />
    </>
  );
};

export default ContactPage;
