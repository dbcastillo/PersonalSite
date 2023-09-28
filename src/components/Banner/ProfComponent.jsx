import React from "react";
import styled from "styled-components";
import { GrDocumentText } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'm</span>
          </h4>
          <h1 className="green">Derick Castillo</h1>
          <h3>Fullstack Software Engineer</h3>
          <p>
            I'm a passionate Software Engineer with 4+ years of relevant experience. My roles in various industries have developed my leadership ability and strong communication skills. When I'm not coding I like to stay active by running/lifting/hiking/rock climbing, I also enjoy playing guitar, cooking, DJ-ing, dancing, movies, and rooftops with friends. 
          </p>
          <button
            onClick={() => {document.getElementById('footer').scrollIntoView();}}
          >Contact me!</button>
          <Social>
            <p>My Links</p>
            <div className="social-icons">
              <span>
                <a href="https://www.canva.com/design/DAFs9NoYrD4/dH3K7IessWM-Qhlg4eCmFw/view?utm_content=DAFs9NoYrD4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank"
                rel="noreferrer">
                  <GrDocumentText />
                </a>
              </span>
              <span>
                <a href="https://www.github.com/dbcastillo"
                target="_blank"
                rel="noreferrer">
                  <BsGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/dbcastillo"
                target="_blank"
                rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://i.ibb.co/vkx01j0/face.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 6rem;
    margin-bottom: 4rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    &:hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.0rem;
    font-weight: 500;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.8rem;
      height: 2.5rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  &:hover img {
    transform: translateY(-10px);
  }
`;
