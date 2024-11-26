import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      if (inputValue === "" && result === "") {
        setResult("Error");
      } else {
        setResult("");
      }
    } else if (value === "=" && inputValue === "") {
      setResult("Error");
    } else if (value === "=") {
      if (incompleteExpression(inputValue)) {
        setResult("Error");
      } else {
        try {
          setResult(eval(inputValue));
        } catch (e) {
          setResult(e);
        }
      }

      setInputValue("");
    } else {
      setInputValue((prev) => prev + value);
    }
  };

  const incompleteExpression = (expression) => {
    const lastChar = expression[expression.length - 1];
    const operators = ["+", "-", "/", "*", "="];
    return operators.includes(lastChar);
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={inputValue}
        readOnly
        // onSubmit={(e) => e.preventDefault}
      />
      <div className="result-div">{result}</div>

      <div className="grid-container">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => handleButtonClick(value)}
              className="grid-item"
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;