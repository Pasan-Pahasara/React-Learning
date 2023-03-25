import { Component } from "react";
import Post from "../../components/Post";

export default class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <Post
          title="Lecture Day 01"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum delectus, sed expedita at nulla culpa numquam nostrum recusandae a deserunt praesentium pariatur sint corporis. Aut odit saepe corporis atque."
          tags={["Intro","Discription"]}
        />
      </div>
    );
  }
}
