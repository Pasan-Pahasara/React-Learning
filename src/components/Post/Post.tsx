import { type } from "os";
import React, { Component } from "react";
import Tag from "../Tag/Tag";

type PostProps = {
  title: string;
  description: string;
  tags: string[];
};

type PostState = {};

export default class Post extends Component<PostProps, PostState> {
  render() {
    return (
      <div className="p-4 border border-slate-400 w-full rounded-2xl mt-2">
        <h1 className="text-center">{this.props.title}</h1>
        <p>{this.props.description}</p>
        <span className="w-full mt-3 flex space-x-3">
          {this.props.tags.map((tagText) => (
            <Tag text={tagText} />
          ))}
        </span>
      </div>
    );
  }
}
