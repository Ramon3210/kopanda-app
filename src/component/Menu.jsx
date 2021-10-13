import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class Menu extends Component {
  render() {
    return (
      <div>
        <Header name="KOPANDA" />
        <Content />
        <Footer />
      </div>
    );
  }
}


componentDidMount () {
    const script = document.createElement("script");

    script.src = "//code.tidio.co/kwzqcn7i5i3zegf54pdewop87bzwcvhk.js";
    script.async = true;

    document.body.appendChild(script);
}

export default Menu;
