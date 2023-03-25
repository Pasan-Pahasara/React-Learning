import { type } from "os";
import React, { Component } from "react";
import Tag from "../Tag/Tag";

type PostProps = {
  title: string;
  description: React.ReactNode;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
};

type PostState = {};

export default class Post extends Component<PostProps, PostState> {
  render() {
    return (
      <div className="p-4 border border-slate-400 w-full rounded-2xl mt-2">
        <h2 className="text-center border-l-black font-bold font-Ubuntu">{this.props.title}</h2>
        <p>{this.props.description}</p>
        <span className="w-full mt-3 flex space-x-3">
          {this.props.hoursCount ? (
            <p>
              <strong>Hours Count</strong> : {this.props.hoursCount}
            </p>
          ) : null}
          {this.props.lecturerName ? (
            <p>
              <strong>Lecturer Name</strong> : {this.props.lecturerName}
            </p>
          ) : null}

          {this.props.tags.map((tagText) => (
            <Tag text={tagText} />
          ))}
        </span>
      </div>
    );
  }
}
