import styled from "styled-components";
import Image from "../assets/images/logo.svg";
import Home from "../assets/images/home-icon.svg";
import Search from "../assets/images/search-icon.svg";
import Watchlist from "../assets/images/watchlist-icon.svg";
import Originals from "../assets/images/original-icon.svg";
import Movies from "../assets/images/movie-icon.svg";
import Series from "../assets/images/series-icon.svg";
import Swal from "sweetalert2";


const Header = () => {
  const alertUser = () => {
    Swal.fire({
      title: "Update Coming Soon",
      text: "The detail page is not yet available",
      icon: "info",
    });
  };
  return (
    <Container>
      <Logo>
        <img src={Image} alt="" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={Home} alt="" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src={Search} alt="" />
          <span onClick={alertUser}>Search</span>
        </a>
        <a href="#">
          <img src={Watchlist} alt="" />
          <span onClick={alertUser}>Watchlist</span>
        </a>
        <a href="#">
          <img src={Originals} alt="" />
          <span onClick={alertUser}>Originals</span>
        </a>
        <a href="#">
          <img src={Movies} alt="" />
          <span onClick={alertUser}>Movies</span>
        </a>
        <a href="#">
          <img src={Series} alt="" />
          <span onClick={alertUser}>Series</span>
        </a>
      </NavMenu>
      <a href="/login">
      <Login>Login</Login>
      </a>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  height: 70px;
  background-color: #040714;
  position: fixed;
  top: 0;
  left: 0;

  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 36px;
  z-index: 999;
  a{
    text-decoration: none;
  }
`;
const Logo = styled.div`
  width: 80px;
  padding: 0px;

  margin-top: 4px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  margin-right: auto;
  margin-left: 25px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: flex-end;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
  }
  img {
    height: 20px;
    width: 20px;
    z-index: auto;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1.42px;
    line-height: 1.08px;
    text-transform: uppercase;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Login = styled.div`
  background-color: aliceblue(0, 0, 0, 0.6);
  padding: 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2 ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
