import { Component } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import "./home.css";
import { PostDetails } from "../../types/PostDetails";

type HomeProps = {};

type HomeState = {
  postList: PostDetails[];
};
export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      postList: [
        {
          id: "1",
          title: "Lecture Day 01",
          description:
            "Lecture D01 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 8,
          tags: ["intro", "typescript"],
        },
        {
          id: "2",
          title: "Lecture Day 02",
          description:
            "Lecture D02 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 6,
          lecturerName: "Chanu",
          tags: ["react", "tailwind"],
        },
        {
          id: "3",
          title: "Lecture Day 03",
          description:
            "Lecture D03 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          tags: ["Lifecycle", "rounting", "structure"],
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Header />
        <div className="p-6 mt-20">
          {this.state.postList.map((post, index) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              hoursCount={post.hoursCount}
              lecturerName={post.lecturerName}
              tags={post.tags}
            />
          ))}
        </div>
      </>
    );
  }
}