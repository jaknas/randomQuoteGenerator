import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Quote from "./Quote.js";

export default class QuoteBox extends Component {
  render() {
    return (
      <Card className="bigos">
        <Quote />
      </Card>
    );
  }
}
