import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://i.ibb.co/BnmzFty/Plankclub.png",
        disc : "Server-side social app allowing users to track/add/edit various plank exercises",
        name: "PlankClub"
    },
    {
        img : "https://i.ibb.co/Ny4zKGG/Flat-Longe.png",
        disc : "Client-side social app built with React.js",
        name: "FlatLounge"
    },
    {
        img : "https://i.ibb.co/tsqX3RJ/JoinMe.png",
        disc : "Fullstack single-page event app allowing users to view/host/attend events",
        name: "JoinMe"
    },
    {
      img : "https://i.ibb.co/BnmzFty/Plankclub.png",
      disc : "Server-side social app allowing users to track/add/edit various plank exercises",
      name: "PlankClub"
    },
    {
      img : "https://i.ibb.co/Ny4zKGG/Flat-Longe.png",
      disc : "Client-side social app built with React.js",
      name: "FlatLounge"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    cursor: pointer;
    color: #000;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`