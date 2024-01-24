import React, { useState } from "react";
import Buttons from "./Buttons";
import "../CSS/Screen.css";

function DisplayScreen() {
  let [inputValue, setInputValue] = useState("");
  let [result, setResult] = useState(0);

  function takeInput(value) {
    setInputValue((prev) => prev + value);
  }

  const deleteInput = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const clearInput = () => {
    setInputValue("");
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(inputValue));
    } catch (error) {
      setResult("ERROR 404");
    }
  };

  return (
    <>
      <div className="main">
        <div className="values">
          <input type="text" placeholder="0" value={inputValue} readOnly />
          <input type="text" placeholder="0" value={result} readOnly />
        </div>
        <div className="buttons">
          <Buttons value={"1"} takeInput={takeInput} />
          <Buttons value={"2"} takeInput={takeInput} />
          <Buttons value={"+"} takeInput={takeInput} />
          <Buttons value={"3"} takeInput={takeInput} />

          <Buttons value={"4"} takeInput={takeInput} />
          <Buttons value={"-"} takeInput={takeInput} />
          <Buttons value={"5"} takeInput={takeInput} />
          <Buttons value={"6"} takeInput={takeInput} />

          <Buttons value={"*"} takeInput={takeInput} />
          <Buttons value={"7"} takeInput={takeInput} />
          <Buttons value={"8"} takeInput={takeInput} />
          <Buttons value={"/"} takeInput={takeInput} />

          <Buttons value={"9"} takeInput={takeInput} />
          <Buttons value={"0"} takeInput={takeInput} />
          <Buttons value={"."} takeInput={takeInput} />

          <Buttons value={"DEL"} takeInput={deleteInput} />
          <Buttons value={"AC"} takeInput={clearInput} />
          <Buttons value={"="} takeInput={calculate} />
        </div>
      </div>
    </>
  );
}

export default DisplayScreen;
