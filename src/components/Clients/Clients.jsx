import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';

let clients = [
  {
    name: 'Ayo Jimoh',
    position: 'VP of Product @ Fetch - managed Derick directly',
    img_url: 'https://i.ibb.co/cXYhCDV/Ayo.png',
    stars: 5,
    disc: `...He has a willingness to learn and was able to deliver assignments across our tech stack. We set a goal for new hires to deliver a production change in their first two weeks and Derick was up for the challenge and delivered effectively...`,
  },
  {
    name: 'Joseph Gansukh',
    position: 'Freelance Web Developer - reported directly to Derick',
    img_url:
      'https://i.ibb.co/RTVcSKj/Screen-Shot-2023-09-06-at-12-41-49-AM.png',
    stars: 5,
    disc: `...one of the most dedicated person I know. He loved to code, has a deep passion to teach others, and constantly works to improve his own skills... very approachable, funny, and has a great sense of humor`,
  },
  {
    name: 'Raza Jafri',
    position:
      'Freelance Teacher/Comedian - worked with Derick on the same team',
    img_url:
      'https://i.ibb.co/rG9f9P6/Screen-Shot-2023-09-06-at-12-42-11-AM.png',
    stars: 5,
    disc: `...Derick has been a complete pleasure to work with...consistently gone above and beyone what's required of him for both his colleagues and students...has a talent for creating warm relationships...has shown ability to lead`,
  },
  {
    name: 'Isiah VanBrackle',
    position:
      "Associate Engineer @ TripleLift - Derick's peer in coding program",
    img_url:
      'https://i.ibb.co/Kwv1D4q/Screen-Shot-2023-09-06-at-12-42-37-AM.png',
    stars: 5,
    disc: `...His positive nature made him a pillar of support...his meticulous learning process made him a reliable source of answers...was always willing to lend a helping hand...he pushed me to go further than the goals I set for myself.`,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = '';
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green">Recommendations</span>
        <h1>what others say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: '';
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
