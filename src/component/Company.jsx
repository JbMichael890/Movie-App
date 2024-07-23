import styled from "styled-components"
import ImageOne from "../assets/images/viewers-disney.png";
import ImageTwo from "../assets/images/viewers-marvel.png";
import ImageThree from "../assets/images/viewers-national.png";
import ImageFour from "../assets/images/viewers-pixar.png";
import ImageFive from "../assets/images/viewers-starwars.png";
import VideoOne from "../assets/videos/disney.mp4";
import VideoTwo from "../assets/videos/marvel.mp4";
import VideoThree from "../assets/videos/national-geographic.mp4";
import VideoFour from "../assets/videos/pixar.mp4";
import VideoFive from "../assets/videos/star-wars.mp4";

const Company = () => {
  return (
    <Container>
      <Card>
      <a href="https://www.disneyinternational.com/">
      <img src={ImageOne} alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src={VideoOne} type="video/mp4" />
        </video>
      </a>

      </Card>
      <Card>
      <a href="https://www.marvel.com/">
      <img src={ImageTwo} alt="" />
        <video  autoPlay muted loop={true} playsInline={true}>
          <source src={VideoTwo} type="video/mp4" />
        </video>
      </a>
      </Card>

      <Card>
      <a href="https://www.nationalgeographic.org/society/">
      <img src={ImageThree} alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src={VideoThree} type="video/mp4" />
        </video>
      </a>
      </Card>
      <Card>
       <a href="https://www.pixar.com/">
       <img src={ImageFour} alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src={VideoFour} type="video/mp4" />
        </video>
       </a>
      </Card>
      <Card>
     <a href="https://www.starwars.com/">
     <img src={ImageFive} alt="" />
        <video autoPlay muted loop={true} playsInline={true}>
          <source src={VideoFive} type="video/mp4" />
        </video>
     </a>
      </Card>
    </Container>
  );
};

export default Company;
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Card = styled.div`
padding-top: 56%;
border-radius: 10px;
border: 3px solid rgba(249, 249, 249, 0.1);
overflow: hidden;
cursor: pointer;
position: relative;
transition: all 250ms;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img{
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1;

}
video{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
  z-index: 0;


}
&:hover{
  transform: scale(1.05);
  video{
    opacity: 1;
  }
}

`;
