import { TextField } from "@mui/material";
import React, { Component } from "react";
import Header from "../../components/Header";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-6 mt-16">
          <span className="flex flex-col space-y-3 text-center">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              possimus placeat non molestiae quidem veniam quaerat perferendis
              nobis magni, dolor facere fugit ipsum est sed similique
              repellendus iusto? Ipsum, ducimus! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsa placeat illo cupiditate
              consectetur ut, quae deleniti consequuntur veniam mollitia
              architecto tenetur, nemo enim. Fugiat iure rerum laborum aliquam,
              vero illo! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Tempora fugit corrupti iste sequi neque explicabo veritatis
              libero, saepe ut deserunt dolores hic suscipit, cupiditate alias
              distinctio facere modi magni assumenda.
            </p>
          </span>

          <div className="mt-3">
            <form className="w-full py-8 px-32 flex flex-col space-y-3">
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                placeholder="Enter Your Email Here"
                fullWidth={true}
                required
              />
              <TextField
                label="Message"
                type="text"
                variant="outlined"
                placeholder="Enter Your Message Here"
                fullWidth={true}
                multiline
                minRows={10}
                maxRows={Infinity}
                required
              />
              <button className="w-full bg-slate-800 rounded-2xl text-white py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
