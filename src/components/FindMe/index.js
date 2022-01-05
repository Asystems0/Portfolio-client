import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FindMeIcons, SocialDiv, SocialIconLink } from "./FindMeElements";

const FindMe = () => {
  return (
    <>
      <FindMeIcons>
        My Profiles
        <SocialDiv>
          <SocialIconLink href="https://github.com/Asystems0" target="_blank">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://il.linkedin.com/in/asafsadika"
            target="_blank"
          >
            <FaLinkedin style={{ color: "#1C6DD0" }} />
          </SocialIconLink>
        </SocialDiv>
      </FindMeIcons>
    </>
  );
};

export default FindMe;
