import { count } from "console";
import { type } from "os";
import React, { Component } from "react";

type CounterProps = {};
type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log();
  }

  componentDidMount() {
    console.log("Component Mounted...!");
  }

  componentDidUpdate() {
    console.log("Component Updated...!");
  }

  componentWillUnmount() {
    console.log("Component Unmounted...!");
  }

  increaseCount = () => {
    //increase count by one

    // Modifying the state directly is not a good practice in react
    // It can be occured incorrect, unnecessary re-renderings and unexpected errors, behavours
    // this.setState({ count: this.state.count + 1 });

    // So, here we makes a copy of previous state modify the values
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  decreaseCount = () => {
    //decrease count by one

    // Modifying the state directly is not a good practice in react
    // It can be occured incorrect, unnecessary re-renderings and unexpected errors, behavours
    // this.setState({ count: this.state.count - 1 });

    // So, here we makes a copy of previous state modify the values
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>

        <div className="flex space-x-3 mt-5 justify-center">
          <button
            disabled={this.state.count === 10 ? true : false}
            className="border border-green-400 p-4 py-2 text-green-400 rounded-xl hover:bg-green-400 hover:text-white hover:drop-shadow-lg"
            onClick={this.increaseCount}
          >
            Increase
          </button>
          <button
            disabled={this.state.count === 0 ? true : false}
            className="border border-red-400 p-4 py-2 text-red-400 rounded-xl hover:bg-red-400 hover:text-white hover:drop-shadow-lg"
            onClick={this.decreaseCount}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
