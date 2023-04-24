import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import userImage from "../../assets/user.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

export default class Header extends Component {
  render() {
    const activeLink = "border-b-2 cursor-pointer";
    const normalLink = "cursor-pointer";

    return (
      <header>
        <div className="bg-accent-navy-200 w-full text-white fixed top-0 p-2 font-Ubuntu z-50">
          <div className=" w-full h-full">
            <div className="flex w-full h-full items-center">
              <div className="w-1/2">
                <div className="px-10">
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <AdbIcon className="flex items-center justify-center mx-2" />
                    MyFeed.com
                  </Typography>
                </div>
              </div>
              <div className="w-1/2">
                <nav className="flex w-full gap-6">
                  <NavLink
                    to={"/home"}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Contact
                  </NavLink>
                  <NavLink to={"/profile"}>
                    <img src={userImage} alt="userImage" className="w-7 h-7" />
                  </NavLink>

                  <NavLink to={"/"} className="cursor-pointer">
                    <LogoutIcon />
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
