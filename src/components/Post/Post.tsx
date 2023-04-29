import { Component } from "react";
import Tag from "../Tag/Tag";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../axios";

type PostProps = {
  _id: string;
  title: string;
  description: string;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
  removePostFromList?: (postId: string) => void;
};

type PostState = {};

export default class Post extends Component<PostProps, PostState> {
  deletePost = (postId: string) => {
    api
      .delete(`post/${postId}`)
      .then((res) => {
        console.log(res);
        if (this.props.removePostFromList) {
          this.props.removePostFromList(postId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="p-6 border border-slate-400 w-full rounded mt-2">
        <h3 className="text-center">{this.props.title}</h3>
        {this.props.description}
        <span className="flex space-x-5">
          {this.props.hoursCount ? (
            <p>
              <strong>Hours count</strong> : {this.props.hoursCount}
            </p>
          ) : null}
          {this.props.lecturerName ? (
            <p>
              <strong>Lecturer Name</strong> : {this.props.lecturerName}
            </p>
          ) : null}
        </span>

        <div className="w-full flex justify-between items-center">
          <span className="w-full mt-3 flex space-x-3">
            {this.props.tags.map((tagText, index) => (
              <Tag key={index} text={tagText} />
            ))}
          </span>
          <button onClick={() => this.deletePost(this.props._id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  }
}