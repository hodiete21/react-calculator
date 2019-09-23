import React from "react";

const Button = ({ capture, clearResults, setOperand, results, onClick }) => {
  return (
    <div className="buttons">
      <div className="row">
        <button onClick={clearResults}>C</button>
        <button onClick={() => capture(0)}>0</button>
        <button onClick={() => capture(1)}>1</button>
        <button className="operator" onClick={() => setOperand("divide")}>
          ÷
        </button>
      </div>
      <div className="row">
        <button onClick={() => capture(2)}>2</button>
        <button onClick={() => capture(3)}>3</button>
        <button onClick={() => capture(4)}>4</button>
        <button className="operator" onClick={() => setOperand("subtract")}>
          -
        </button>
      </div>
      <div className="row">
        <button onClick={() => capture(5)}>5</button>

        <button onClick={() => capture(6)}>6</button>
        <button onClick={() => capture(7)}>7</button>
        <button className="operator" onClick={() => setOperand("multiply")}>
          x
        </button>
      </div>
      <div className="row">
        <button onClick={() => capture(8)}>8</button>
        <button onClick={() => capture(9)}>9</button>
        <button onClick={() => capture(".")}>.</button>
        <button className="operator" onClick={() => setOperand("add")}>
          +
        </button>
        <button className="operator" onClick={() => setOperand("percent")}>
          %
        </button>
        <button className="operator" onClick={() => setOperand("negate")}>
          ±
        </button>
        <button className="operator" onClick={() => results()}>
          =
        </button>
      </div>
    </div>
  );
};

export default Button;
