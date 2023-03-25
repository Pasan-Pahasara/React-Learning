import { Component, ReactNode } from "react";
import Post from "../../components/Post";

type PostDetails = {
  id: string;
  title: string;
  description: React.ReactNode;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
};

type HomeProps={};

type HomeState={
  postList:PostDetails[];
};

export default class Home extends Component <HomeProps,HomeState>{
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      postList: [
        {
          id: "1",
          title: "Lecture 1",
          description:
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.</p>,
            hoursCount: 10,
          tags: ["intro", "typescript"],
        },
        {
          id: "2",
          title: "Lecture 2",
          description:
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.</p>,
          hoursCount: 8,
          lecturerName:"Podi Sanu",
          tags: ["ui", "ux"],
        },
        {
          id: "3",
          title: "Lecture 3",
          description:
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.</p>,
          hoursCount: 11,
          tags: ["react", "tailwind"],
        },
      ],
    };
  }

  render(){
    return(
      <div className="p-6">
        {this.state.postList.map((post, index) =>(
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
    );
  }
}
