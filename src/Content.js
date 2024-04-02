import React from "react";
import colorNames from "colornames";

const Content = ({
  isDarkText,
  sethexValue,
  setColorValue,
  setIsDarkText,
  colorValue,
}) => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="ColorText">Add Color Name</label>
      <input
        autoFocus
        type="text"
        placeholder="Enter the Color Name"
        id="colorText"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          sethexValue(colorNames(e.target.value));
        }}
      />
      <br />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Content;
