import React, { Component } from "react";
import Button from "./component/button";

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
      savedInput: this.state.input,
      operator: "",
      operand: ""
    });
  };
  clearResults = () => {
    this.setState({ input: 0, savedInput: "", operand: false, operator: "" });
  };
  captureValue = value => {
    this.state.operand === false
      ? this.setState({ input: this.state.input + value + "" })
      : this.setState({ input: "" + value, operand: false });
  };

  setOperand = value => {
    if (value === "negate") {
      this.setState({ input: this.state.input * -1 });
    } else if (value === "percent") {
      this.setState({
        input:
          this.calculate(
            this.state.operator,
            this.state.savedInput,
            this.state.input
          ) / 100
      });
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

  calculate = (operator, a, b) => {
    const first = Number(a);
    const second = Number(b);
    if (operator === "add") {
      return first + second;
    } else if (operator === "subtract") {
      return first - second;
    } else if (operator === "divide") {
      return first / second;
    } else if (operator === "multiply") {
      return first * second;
    } else {
      return this.state.input;
    }
  };

  render() {
    const { input, savedInput, operand } = this.state;
    return (
      <div className="calc">
        {/* <input value={operand ? savedInput : input} /> */}
        <div className="display">{operand ? savedInput : input}</div>

        <Button
          capture={this.captureValue}
          clearResults={this.clearResults}
          setOperand={this.setOperand}
          results={this.displayResult}
          onClick={this.onClick}
        ></Button>
      </div>
    );
  }
}

export default Calculator;
