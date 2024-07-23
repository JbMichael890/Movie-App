import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../Json/Data.json";
import ImageOne from "../assets/images/play-icon-black.png";
import ImageTwo from "../assets/images/play-icon-white.png";
import ImageThree from "../assets/images/watchlist-icon.svg";
import ImageFour from "../assets/images/group-icon.png";

const Details = () => {
  const { id } = useParams();
  const newData = data[id - 1];
  console.log("new", newData);
  console.log("object");
  return (
    <Container
      style={{
        backgroundImage: `url(${newData.backgroundImg})`,
      }}
    >
      <ImageTitle><img src={newData.titleImg} alt="" />                                                         sAqaAQa</ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src={ImageOne} alt="" />
            <span>PLAY</span>
          </Player>
          <a href="https://youtu.be/xOsLIiBStEs">
            <Trailer>
              <img src={ImageTwo} alt="" />
              <span>TRAILER</span>
            </Trailer>
          </a>
          <Addlist>
            <div>
              <img src={ImageThree} alt="" />
            </div>
          </Addlist>
          <GroupWatch>
            <div>
              <img src={ImageFour} alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle> {newData.subTitle} </SubTitle>
        <Description> {newData.description} </Description>
      </ContentMeta>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 calc(3.5vw - 5px);
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
  a {
    text-decoration: none;
  }
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  letter-spacing: 1.8px;
  font-weight: 600;
  text-align: center;
  background: rgb(249, 249, 249);
  transition: all 350ms;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
  }
`;
const Addlist = styled.div`
  height: 44px;
  width: 44px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  img {
    width: 70%;
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  img {
    width: 70%;
    object-fit: contain;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 17px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
