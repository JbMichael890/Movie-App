import styled from "styled-components"
import Background from "../assets/images/login-background.jpg"
import ImageOne from  "../assets/images/cta-logo-one.svg"
import ImageTwo from "../assets/images/cta-logo-two.png"

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <img src={ImageOne} alt="img" />
    <a href="/home">
    <button>Get All Here</button>
    </a>
      <p>
        Get Premier Access to Raya and the last Dragon for an additional fee
        with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
        the Disney Bundle will increase by $1.</p>
        <img src={ImageTwo} alt="imgTwo" />
    </Wrapper>
  </Container>
  )
}

export default Login
const Container = styled.div`
background-image: url(${Background});
/* background-position: center; */
background-size: cover;
min-height: calc(100vh - 70px);
margin-top: 70px;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`

max-width: 650px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
a{
  text-decoration: none;
  width: 100%;
  /* padding: 17px 0; */
}
button {
    width: 100%;
    padding: 17px 0;
    border: none;
    outline: none;
    font-family: Poppins;
    font-weight: 700;
    font-size: 18px;
    background-color: #0063e5;
    color: #fff;
    border-radius: 4px;
    transition: all 350ms;

    &:hover {
      cursor: pointer;
      background-color: #0483ee;
    }
    @media (max-width: 900px) {
  width: 90%;
}
  }

  p {
    text-align: center;
    font-size: 11px;
  }

  img {
    width: 600px;
    margin: 10px;
    @media (max-width: 800px) {
  width: 90%;
}
  }
`;


