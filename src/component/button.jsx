import React from "react";

const Button = ({
  capture,
  clearResults,
  setOperand,
  results,
  onkeypress,
  onkeyup
}) => {
  return (
    <div className="buttons">
      <div className="row">
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={clearResults}
        >
          C
        </button>
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(0)}
        >
          0
        </button>
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(1)}
        >
          1
        </button>
        <button
          className="operator"
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => setOperand("/")}
        >
          ÷
        </button>
      </div>
      <div className="row">
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(2)}
        >
          2
        </button>
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(3)}
        >
          3
        </button>
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(4)}
        >
          4
        </button>
        <button
          className="operator"
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => setOperand("-")}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(5)}
        >
          5
        </button>

        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(6)}
        >
          6
        </button>
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(7)}
        >
          7
        </button>
        <button
          className="operator"
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => setOperand("*")}
        >
          x
        </button>
      </div>
      <div className="row">
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(8)}
        >
          8
        </button>
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(9)}
        >
          9
        </button>
        <button
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => capture(".")}
        >
          .
        </button>
        <button
          className="operator"
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => setOperand("+")}
        >
          +
        </button>
        <button
          className="operator"
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => setOperand("%")}
        >
          %
        </button>
        <button
          className="operator"
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => setOperand("negate")}
        >
          ±
        </button>
        <button
          className="operator"
          onKeyUp={onkeyup}
          onKeyPress={onkeypress}
          onClick={() => results()}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Button;
