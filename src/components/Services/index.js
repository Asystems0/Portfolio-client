import React from "react";

import Icon1 from "../../images/undraw_server_cluster_jwwq.png";
import Icon2 from "../../images/undraw_static_assets_rpm6.png";
import Icon3 from "../../images/undraw_Server_re_twwj.png";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesdIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements.js";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1 id="services">Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesdIcon src={Icon2} />
          <ServicesH2>Front End</ServicesH2>
          <ServicesP>HTML, CSS, JAVASCRIPT - Jquery & React.</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesdIcon src={Icon3} />
          <ServicesH2>Back End</ServicesH2>
          <ServicesP>NODE JS - using in Express framework.</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesdIcon src={Icon1} />
          <ServicesH2>Full Stack</ServicesH2>
          <ServicesP>MERN - MongDB, Express, React and Node js.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
