import React, { Component } from "react";
import Card from "../Card/Card";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

export default class CardContainer extends Component {
  render() {
    return (
      <div className="flex justify-center gap-6 p-4 text-black">
    {/* <div className="mt-3 grid grid-cols-4 gap-x-5"> */}
        <Card
          title="Card 1"
          icon={<AppleIcon />}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
          title="Card 2"
          icon={<AirplaneTicketIcon />}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
          title="Card 3"
          icon={<AndroidIcon />}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
          title="Card 4"
          icon={<AddShoppingCartIcon />}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
      </div>
    );
  }
}
