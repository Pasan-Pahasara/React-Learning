import {TextField } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="py-6 px-8 min-h-screen flex justify-center items-center bg-accent-navy-50">
        <div className="bg-white rounded px-6 py-12 w-[30%] text-center shadow-xl">
          <h3>Sign In</h3>
          <form className="w-full flex flex-col space-y-3 mt-3">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter your email"
              fullWidth={true}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              fullWidth={true}
              required
            />
            <Link to={"/home"}>
              <button className="w-full bg-accent-navy-200 text-white py-3 rounded">
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
