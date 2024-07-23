import styled from "styled-components";
import Data from "../Json/Data.json";
import { Link } from "react-router-dom";

const Original = () => {
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {Data.map(
          (myData, i) =>
            myData.type === "original" && (
              <Link key={i} to={`/detail/${myData.id1}`}>
                <Card>
                  <img src={myData.cardImg} alt="" />
                </Card>
              </Link>
            )
        )}
      </Content>
    </Container>
  );
};

export default Original;
const Container = styled.div`
  padding: 30px 40px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Card = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms;

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    width: 100%;
    z-index: 1;
  }
  &:hover{
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
