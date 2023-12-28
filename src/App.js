import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [result, setResult] = useState("");

  const hanleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1)); //Or - 1
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button onClick={clear} className="highlight" id="clear">
            Clear
          </button>
          <button onClick={backspace} className="highlight" id="backspace">
            C
          </button>
          <button name="/" onClick={hanleClick} className="highlight">
            &divide;
          </button>
          <button name="7" onClick={hanleClick}>
            7
          </button>
          <button name="8" onClick={hanleClick}>
            8
          </button>
          <button name="9" onClick={hanleClick}>
            9
          </button>
          <button name="*" onClick={hanleClick} className="highlight">
            &times;
          </button>
          <button name="4" onClick={hanleClick}>
            4
          </button>
          <button name="5" onClick={hanleClick}>
            5
          </button>
          <button name="6" onClick={hanleClick}>
            6
          </button>
          <button name="-" onClick={hanleClick} className="highlight">
            &ndash;
          </button>
          <button name="1" onClick={hanleClick}>
            1
          </button>
          <button name="2" onClick={hanleClick}>
            2
          </button>
          <button name="3" onClick={hanleClick}>
            3
          </button>
          <button name="+" onClick={hanleClick} className="highlight">
            +
          </button>
          <button name="0" onClick={hanleClick}>
            0
          </button>
          <button name="." onClick={hanleClick}>
            .
          </button>
          <button onClick={calculate} className="highlight" id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
