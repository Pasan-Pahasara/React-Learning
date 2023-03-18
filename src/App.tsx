import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Counter from "./components/Counter";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi yako...!");
  }

  render(){
    return (
      <div className="bg-yellow-50 min-h-screen text-center pt-2">
        {/* <Home/>
        <About/>
        <Contact/>
        <Profile/> */}
        <Counter/>
    </div>
    );
  }
}
