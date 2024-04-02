import { useState } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Square from "./Square";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, sethexvlaue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Header />
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Content
        colorValue={colorValue}
        isDarkText={isDarkText}
        setColorValue={setColorValue}
        sethexValue={sethexvlaue}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
