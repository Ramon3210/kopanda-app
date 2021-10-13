import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import useScript from 'hooks/useScript';

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

const MyComponent = props => {
  useScript('//code.tidio.co/kwzqcn7i5i3zegf54pdewop87bzwcvhk.js');
}

export default Menu;
