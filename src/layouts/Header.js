import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";
import img1 from "../images/woman.jpg";
import img2 from "../images/yoga.jpg";
import img3 from "../images/carabao.jpg";
const Header = () => {
    
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="kobieta" />} />
        <Route
          path="/products"
          render={() => <img src={img2} alt="kobieta" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="kobieta" />}
        />
        <Route path="/admin" render={() => <img src={img1} alt="kobieta" />} />
        <Route render={()=> (<img src={img1} alt="kobieta" />)}/>
      </Switch>
    </>
  );
};

export default Header;
