import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi yako...!");
  }

  render(){
    return (
      <div className="bg-black min-h-screen text-center">
        <Home/>
        <About/>
        <Contact/>
        <Profile/>
    </div>
    );
  }
}
