import "./Footer.css";
import React, { Component } from "react";

class Footer extends Component {
  // constructor(props){
  //     state(props){

  //     };
  // }
  onClick = () => {
    const rand = Math.floor(Math.random() * 10);
    this.props.newquote(rand);
  };

  render() {
    return (
      <div className="myFooter">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <i className="fab fa-twitter-square fa-2x" />
        </a>
        <button
          onClick={this.onClick}
          typeof="button"
          className="btn btn-dark btn-sm"
          name="newquote"
          id="new-quote"
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default Footer;
