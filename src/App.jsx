import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Static/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
