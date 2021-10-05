import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  render() {
    return (
      <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1">
        <button
          className=" border-solid border-2 g-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
          onClick={this.increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
        <p className="outline-none focus:outline-none text-center w-10 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none">
          {this.state.count}
        </p>
        <button
          className="border-solid border-2 g-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
          onClick={this.decrement}
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
      </div>
    );
  }
}
