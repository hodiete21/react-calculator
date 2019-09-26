import React, { Component } from "react";
import Button from "./component/button";
import { Keys } from "./keys/keys";

class Calculator extends Component {
  state = {
    input: 0,
    operator: "",
    savedInput: "",
    operand: false
  };

  displayResult = () => {
    this.setState({
      input: this.calculate(
        this.state.operator,
        this.state.savedInput,
        this.state.input
      ),
      operator: "",
      operand: false,
      savedInput: this.state.input
    });
  };
  clearResults = () => {
    this.setState({ input: 0, savedInput: "", operand: false, operator: "" });
  };
  captureValue = value => {
    this.state.operand === false
      ? this.setState({
          input: this.state.input + value + ""
        })
      : this.setState({ input: "" + value, operand: false });
  };

  setOperand = value => {
    if (value === "negate") {
      this.setState({ input: this.state.input * -1 });
    } else if (value === "%") {
      this.setState({ input: this.state.input / 100 });
    } else {
      this.setState({
        operator: value,
        savedInput: this.calculate(
          this.state.operator,
          this.state.savedInput,
          this.state.input
        ),

        operand: true
      });
    }
  };

  Keypress = e => {
    if (Keys().includes(e.which)) {
      if (
        e.key === "/" ||
        e.key === "%" ||
        e.key === "*" ||
        e.key === "-" ||
        e.key === "+"
      ) {
        this.setOperand(e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        this.displayResult();
      } else {
        e.key === "."
          ? this.captureValue(e.key)
          : this.captureValue(Number(e.key));
      }
    }
  };

  keyup = e => {
    if (e.which === 8) {
      let input = [].slice.call(this.state.input);
      input.pop();

      input.length === 0
        ? this.setState({ input: 0 })
        : this.setState({ input: input.join("") });
    } else if (e.which === 27) {
      this.clearResults();
    }
  };

  calculate = (operator, a, b) => {
    const first = Number(a);
    const second = Number(b);
    if (operator === "+") {
      this.setState({ input: 0 });
      this.setState({ Input: first + second });
      return first + second;
    } else if (operator === "-") {
      this.setState({ input: 0 });
      return first - second;
    } else if (operator === "/") {
      this.setState({ input: 1 });
      return first / second;
    } else if (operator === "*") {
      this.setState({ input: 1 });
      return first * second;
    } else {
      return this.state.input;
    }
  };

  render() {
    const { input, savedInput, operand } = this.state;
    return (
      <div className="calc">
        <div className="display">{operand ? savedInput : input}</div>
        {/* <input value={operand ? savedInput : input}></input> */}
        <Button
          onkeyup={this.keyup}
          onkeypress={this.Keypress}
          capture={this.captureValue}
          clearResults={this.clearResults}
          setOperand={this.setOperand}
          results={this.displayResult}
        ></Button>
      </div>
    );
  }
}

export default Calculator;
