import React from "react";

import blog from "../../images/bloglog.PNG";
import devConnector from "../../images/devconnector.PNG";
import shops from "../../images/shops4u.PNG";

import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsRow,
  TextWrapper,
  TopLine,
  Column1,
  Column2,
  Column3,
  Row1,
  Row2,
  Hr,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Img2,
} from "./ProjectsElements.js";

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <ProjectsRow>
            <TextWrapper>
              <TopLine>Projects</TopLine>
            </TextWrapper>
            <Column1>
              <Row1>
                <Heading>Shops4U</Heading>
                <Subtitle>
                  Meet Shops4u, a new online store that offers a variety of
                  collections from our home designers. It is impossible to leave
                  empty-handed in our shop.
                </Subtitle>
              </Row1>
              <Row2>
                <ImgWrap>
                  <a target="_blank" href="https://shops4u.netlify.app/">
                    <Img src={shops} alt="Shops" />
                  </a>
                </ImgWrap>
              </Row2>
            </Column1>

            <Hr />
            <Column2>
              <Row1>
                <Heading>Blog</Heading>
                <Subtitle>
                  A blog where anyone can delete, edit and share posts they
                  want. There is no unique editor.
                </Subtitle>
              </Row1>
              <Row2>
                <ImgWrap>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bloglog.netlify.app/"
                  >
                    <Img2 src={blog} alt="blog" />
                  </a>
                </ImgWrap>
              </Row2>
            </Column2>
            <Hr />

            <Column3>
              <Row1>
                <Heading>Developer Conector</Heading>
                <Subtitle>
                  A kind of social network for programmers. Developers can tell
                  about themselves, share their portfolio from GitHub, upload
                  posts and write comments.
                </Subtitle>
              </Row1>
              <Row2>
                <ImgWrap>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://connectordevs.netlify.app/"
                  >
                    <Img src={devConnector} alt="devConnector" />
                  </a>
                </ImgWrap>
              </Row2>
            </Column3>
          </ProjectsRow>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
