import styled from 'styled-components';

interface ArrowProps {
    direction: string;
}

interface WrapperProps {
  slideIndex: number;
}

interface SlideProps {
  bg: string;
}


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
Overflow: hidden;

`;

const Arrow = styled.div<ArrowProps>`
width: 50px;
height: 50px;
background-color: grey;
color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === 'left' && '10px'};
right: ${(props) => props.direction === 'right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div<WrapperProps>`
height: 100%;
display: flex;
text-align: center;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
@media ${(props) => props.theme.breakpoints.sm} {
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  
}
`;

const Slide = styled.div<SlideProps>`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
@media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
}
`;
const ImgContainer = styled.div`
flex: 1;
height: 80%;
@media ${(props) => props.theme.breakpoints.sm} {
    height: 50%;
}
`;

const Image = styled.img`
width: 80%;
height: 100%;
obeject-fit: cover;

`;

const InfoContainer = styled.div`
flex: 2;
padding: 50px;
max-width: 1300px;
@media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px;
    text-align: center;
}
`;

const Title = styled.h1`
font-size: 70px;


@media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
}
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
margin-right: 20px;
&:hover {
    background-color: #008080;
    color: white;
    border-radius: 10px;
}
`;

export {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
};
