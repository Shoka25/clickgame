import React, { Component } from "react";
import "./style.css";

class Title extends Component {
    render(){
        return(
   <div>
       <h1 className="title">Correct Guesses: {this.props.correct} Best Score: {this.props.best}</h1>
       <br></br>
       <h2 className="title">{this.props.message}</h2>
       </div>
        );
  
  
  
};
};
export default Title;
