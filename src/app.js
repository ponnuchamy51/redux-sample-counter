import React from "react";
import { increment, decrement } from "./actions";
import { connect } from "react-redux";
// import decrement from "./actions/decrement";

function App(props) {
  // const handleIncrement = () => {
  //   props.dispatch(increment());
  // };
  // const handleDecrement = () => {
  //   props.dispatch(decrement(2));
  // };
  return (
    <div className="App">
      <h1>Hello App</h1>

      {props.counter}
      <br />

      <button className="btn btn-success" onClick={() => props.increment()}>
        + 1
      </button>
      <button
        className="btn btn-danger ml-2"
        onClick={() => props.decrement(2)}
      >
        - 2
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return { counter: state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: val => dispatch(decrement(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
