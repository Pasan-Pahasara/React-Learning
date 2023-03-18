import React, { Component } from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/user.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="bg-accent-navy-200 w-full text-white fixed top-0 p-2 font-Ubuntu">
          <div className=" w-full h-full">
            <div className="flex w-full h-full items-center">
              <div className="w-1/2">
                <h1 className="text-white">MyFeed.com</h1>
              </div>
              <div className="w-1/2">
                <nav className="flex w-full gap-6">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/contact"}>Contact</Link>
                  <Link to={"/profile"}>
                    <img src={userImage} alt="userImage" className="w-7 h-7" />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
