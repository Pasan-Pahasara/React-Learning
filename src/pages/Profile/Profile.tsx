import { ChangeEvent, Component, ReactNode } from "react";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { PostDetails } from "../../types/PostDetails";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Divider, TextField } from "@mui/material";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

type ProfileProps = {};

type ProfileState = {
  posts: PostDetails[];
  isClickedCreateNewPost: boolean;
  title: string;
  description: string;
  hoursCount: number;
  lectureName: string;
  tagString: string;
};

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileState) {
    super(props);
    this.state = {
      title: "",
      description: "",
      hoursCount: 0,
      lectureName: "",
      tagString: "",
      isClickedCreateNewPost: false,
      posts: [
        {
          id: "1",
          title: "Lecture 1",
          description: (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda ducimus recusandae velit ullam, quos a eum consequuntur
              et praesentium omnis nobis? Maxime velit nesciunt at aperiam
              perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Assumenda ducimus recusandae
              velit ullam, quos a eum consequuntur et praesentium omnis nobis?
              Maxime velit nesciunt at aperiam perspiciatis necessitatibus,
              itaque esse.
            </p>
          ),
          hoursCount: 10,
          tags: ["intro", "typescript"],
        },
        {
          id: "2",
          title: "Lecture 2",
          description: (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda ducimus recusandae velit ullam, quos a eum consequuntur
              et praesentium omnis nobis? Maxime velit nesciunt at aperiam
              perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Assumenda ducimus recusandae
              velit ullam, quos a eum consequuntur et praesentium omnis nobis?
              Maxime velit nesciunt at aperiam perspiciatis necessitatibus,
              itaque esse.
            </p>
          ),
          hoursCount: 8,
          lecturerName: "Podi Sanu",
          tags: ["ui", "ux"],
        },
        {
          id: "3",
          title: "Lecture 3",
          description: (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda ducimus recusandae velit ullam, quos a eum consequuntur
              et praesentium omnis nobis? Maxime velit nesciunt at aperiam
              perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Assumenda ducimus recusandae
              velit ullam, quos a eum consequuntur et praesentium omnis nobis?
              Maxime velit nesciunt at aperiam perspiciatis necessitatibus,
              itaque esse.
            </p>
          ),
          hoursCount: 11,
          tags: ["react", "tailwind"],
        },
      ],
    };
  }

  handleClickCreateNewPost = () => {
    this.setState((prevState) => ({
      ...prevState,
      isClickedCreateNewPost: !prevState.isClickedCreateNewPost,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Changed");
    console.log(event.target.value);
    
      // desctructuring assignment
      const { name, value } = event.target;

      this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  };

  render() {
    return (
      <>
        <Header />
        <div className="mt-20 py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            {!this.state.isClickedCreateNewPost ? (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-accent-navy-200 text-white rounded-2xl flex justify-between items-center"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6>Create New Post</h6>
                  <AddBoxIcon />
                </div>
                <div
                  className="cursor-pointer p-8 bg-white rounded-2xl text-slate-400 flex justify-center items-center space-x-3 border border-slate-400"
                  onClick={this.handleClickCreateNewPost}
                >
                  <PostAddIcon />
                  <h6>Your New Post</h6>
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-accent-navy-200 text-white rounded-2xl flex justify-between items-center"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6>Discard Post</h6>
                  <IndeterminateCheckBoxIcon />
                </div>
                <div className="w-full cursor-pointer p-8 bg-white rounded-2xl text-slate-400 flex justify-center items-center space-x-3 border border-slate-400">
                  <form
                    className="flex flex-col space-y-3 w-full"
                    onSubmit={this.handleSubmit}
                  >
                    <TextField
                      label="Post Title"
                      type="text"
                      variant="outlined"
                      name="title"
                      placeholder="Enter post title"
                      onChange={this.handleInputChange}
                      value={this.state.title}
                      fullWidth={true}
                      required
                    />
                    <TextField
                      label="Post Description"
                      type="text"
                      variant="outlined"
                      name="description"
                      placeholder="Enter post description"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      fullWidth={true}
                      multiline
                      minRows={5}
                      maxRows={Infinity}
                      required
                    />
                    <TextField
                      label="Hours Count"
                      type="number"
                      variant="outlined"
                      name="hoursCount"
                      placeholder="Enter hours count"
                      onChange={this.handleInputChange}
                      value={this.state.hoursCount}
                      fullWidth={true}
                    />
                    <TextField
                      label="Lecturer Name"
                      type="text"
                      variant="outlined"
                      placeholder="Enter Lecturer Name"
                      name="lecturerName"
                      onChange={this.handleInputChange}
                      value={this.state.lectureName}
                      fullWidth={true}
                    />
                    <TextField
                      label="Tags (Comma separated tags)"
                      type="text"
                      variant="outlined"
                      name="tagString"
                      placeholder="Enter comma separated tags"
                      onChange={this.handleInputChange}
                      value={this.state.tagString}
                      fullWidth={true}
                      required
                    />
                    <button className="py-2 bg-accent-navy-200 text-white rounded">
                      <h6>Publish Post</h6>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>

          <Divider className="!my-5" />

          {this.state.posts.map((post) => (
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
