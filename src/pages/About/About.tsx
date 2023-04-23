import React, { Component } from "react";
import AboutIntro from "../../components/AboutIntro";
import CardContainer from "../../components/CardContainer";
import Header from "../../components/Header/Header";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="mt-16">
          <AboutIntro />
          <CardContainer />
        </div>
      </>
    );
  }
}
