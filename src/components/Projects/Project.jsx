import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc, name } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            {name === "PlankClub" ?
            <h1>PlankClub App</h1> :
            name === "FlatLounge" ?
            <h1>FlatLounge App</h1> :
            <h1>JoinMe App</h1>}
            <p>{disc}
            {name === "PlankClub" ? 
            <a href="https://youtu.be/a6l_3YW39qQ?si=xO7FQfNeQuHgPO3_"
            target="_blank"
            rel="noreferrer">demo</a> : 
            name === "FlatLounge" ? 
            <a href="https://youtu.be/3UYEj0e_u4U?si=16uW-YeukRQHzwWm"
            target="_blank"
            rel="noreferrer">demo</a> : 
            <a href="https://youtu.be/5qvZ9ssDsOg?si=GfJ_rB6Xdg72tBOC"
            target="_blank"
            rel="noreferrer">demo</a>}
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    &:hover > img{
        transform: scale(1.3);
    }

    &:hover > .disc{
        bottom: 0;
    }

`