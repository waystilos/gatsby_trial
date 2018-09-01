import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClickAdd = () => {
    this.setState((prevState, prop) => ({
      count: prevState.count + 1
    }));
  };

  handleClickMinus = () => {
    this.setState((prevState, prop) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={this.handleClickAdd}>plus</button>
        <button onClick={this.handleClickMinus}>minus</button>
      </div>
    );
  }
}
