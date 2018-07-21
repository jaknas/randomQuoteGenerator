import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Twitter from "mdi-material-ui/Twitter";

export default class Quote extends Component {
  state = {
    text: "",
    author: ""
  };

  async componentDidMount() {
    const res = await fetch("https://talaikis.com/api/quotes/random/");
    const firstLoad = await res.json();
    this.setState({
      text: firstLoad.quote,
      author: firstLoad.author
    });
  }

  quoteFetcher = async () => {
    const response = await fetch("https://talaikis.com/api/quotes/random/");
    const json = await response.json();
    this.setState({
      text: json.quote,
      author: json.author
    });
  };

  render() {
    return (
      <div className="Quote">
        <p className="text">{this.state.text}</p>
        <p className="author">{this.state.author} </p>

        <Button
          variant="contained"
          className="button"
          color="primary"
          size="large"
          onClick={this.quoteFetcher}
        >
          New quote
        </Button>
        <a className="twitter" href="https://www.twitter.com/intent/tweet">
          <Button color="primary" variant="contained" size="medium">
            <Twitter className="twitter--button" />
          </Button>
        </a>
      </div>
    );
  }
}
