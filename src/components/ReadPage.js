import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
import WebViewer from 'web-viewer'; 
import doc from 'C:/Users/Abubakar/Desktop/CS98/hack-a-thing-1-fockus/src/components/webviewer-demo.pdf';

class ReadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet

    this.styles = {
      container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(12,124, 243, 0.6)',
      }
    };
  }
  
  render() {
    return (
      <div style={this.styles.container}>
        <iframe src={doc} width='90%' height='90%'>

          This browser does not support PDFs. Please download the PDF to view it: Download PDF

        </iframe>
      </div>
      
    )
  }
}

export default ReadPage