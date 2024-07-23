import styled from "styled-components";
import Background from "../assets/images/home-background.png";
import Recommended from "../component/Recommended"
import Herosider from "../component/HeroSlider";
import Company from "../component/Company";
import NewToDisney from "../component/NewToDisney";
import Original from "../component/Original";
import Trending from "../component/Trending";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Herosider />
        <Company/>
        <Recommended/>
        <NewToDisney/>
        <Original/>
        <Trending/>
      </Wrapper>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  background-image: url(${Background});
  background-position: center;
overflow-x: hidden;
  background-repeat: no-repeat;
  margin-top: 70px;

`;
const Wrapper = styled.div``;
