import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { FiCodesandbox } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import styled from 'styled-components';
import Card from './Card';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">skills</span>
        </h4>
        <h1>What I Bring To The Table</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BsPeople}
            title={'Customer Experience Expertise'}
            disc={`10+ years of customer experience/support across various industries has equipped me to collaborate effectively with others, quickly adjust to changing company needs, and learn new concepts quickly, often working in high pressure environments.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={'Problem-Focused, Data-Driven'}
            disc={`I come to you skilled at the art of applying grit and perseverance to solving technical issues, with additional experience in tackling challenges across a range of industries and positions`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={'Lifelong Learner'}
            disc={`I am excited to learn new technologies, enjoy collaborating with others, and passionate about engaging in innovative ways of problem solving via productive teamwork and clean code`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
