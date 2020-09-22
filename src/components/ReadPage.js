import React, { Component } from 'react';

class ReadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
    this.doc = import('C:/Users/Abubakar/Desktop/CS98/hack-a-thing-1-fockus/src/components/webviewer-demo.pdf');
    console.log(this.doc);
    this.styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(12,124, 243, 0.6)',
      }
    };
  }
  
  render() {
    if (this.doc == undefined){
      return (
        <div style={this.styles.container}>
          Loading..**^^
          <button onClick={() => {this.forceUpdate()}}>try again</button>
        </div>
      );
    } else {
      return (
        <div style={this.styles.container}>
          <iframe src={this.doc} width='90%' height='90%'>
            This browser does not support PDFs. Please download the PDF to view it: Download PDF
          </iframe>
        </div>
      );
    }
  }
}

export default ReadPage