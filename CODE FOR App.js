import React from "react";
 import "./App.css";
 import NewComp from "./Components/NewComp";
 class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "black"
  };
  render() {
    return (
      <div className="App">
      <h4 style={this.styles}> WELCOME to my page </h4>
       <NewComp/>
      </div>
    );

  }
 }
 export default App;
