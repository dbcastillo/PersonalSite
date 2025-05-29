import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';

const data = [
  {
    img: '/assets/images/Resume-image.png',
    link: 'https://derickresume.netlify.app/',
    name: "Vue.js Resume",
  },
  {
    img: '/assets/images/Blog-image.png',
    link: 'https://dericksblogs.netlify.app/',
    name: "Blog Site",
  },
  {
      img: '/assets/images/Canva-resume.png',
      link: 'https://www.canva.com/design/DAFs9NoYrD4/zVIhkaQ9nuw0LtP1ukV5dw/edit?utm_content=DAFs9NoYrD4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      name: "Canva Resume",
    },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SliderComp = () => {
  return (
        <Container id='client'>
            <Slide direction="left">
                <span className="green">Projects</span>
                <h1>What I've Built</h1>
            </Slide>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        centerMode
        arrows
        showDots
        itemClass="carousel-item-padding-40-px"
      >

        {data.map((item, index) => (
          <SlideCard key={index} onClick={() => window.open(item.link, '_blank')}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </SlideCard>
        ))}
      </Carousel>
        </Container>
  );
};

export default SliderComp;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SlideCard = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  background: #333;
  border-radius: 10px;
  text-align: center;
  color: white;

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }

    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

