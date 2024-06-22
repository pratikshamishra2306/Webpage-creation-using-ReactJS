import React, { Component } from 'react'
import file1 from "./file1.png"
import file2 from "./file2.png"

 class NewComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hope you all are having a great day",
            sub: "Click here to view the image",
            
        };
    }
    styles = {
        fontStyle: "italic",
        color: "teal"
      };
      Buttonchange = () => {
        this.setState({
            sub: "Press on the image to view the next image",
            imageURL: file1
      });
      };
      imageChange= () => {
        this.setState({
            imageURL: file2,
            message: "Thank you for viewing my page",
        });
      };
    render() {
        return <div className="App"><h5 style= {this.styles}>{this.state.message}</h5>
        <button onClick={this.Buttonchange }>{this.state.sub}</button>
        <p/>
        <img style={{width: "200 px" , height: "200px"}} src = {this.state.imageURL} 
        onClick={this.imageChange}
        alt=""/>
        </div>
    }
}
export default NewComp;


