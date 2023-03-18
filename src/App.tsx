import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi yako...!");
  }

  render(){
    return (
      <div className="bg-black min-h-screen text-center">
        <h1>Hi</h1>
        <h1>Hello</h1>
        <h2 className="text-cyan-300">Hello world</h2>
        <h3 className="text-cyan-300">Hello world</h3>
    </div>
    );
  }
}
