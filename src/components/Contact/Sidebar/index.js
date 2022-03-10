import React from "react";

import { HashLink } from "react-router-hash-link";

import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements.js";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            <HashLink
              to="/#about"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              About
            </HashLink>
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            <HashLink
              to="/#projects"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Projects
            </HashLink>
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            <HashLink
              to="/#services"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Services
            </HashLink>
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact" onClick={toggle}>
            Be in touch
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
