import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./components/QuoteBox.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
