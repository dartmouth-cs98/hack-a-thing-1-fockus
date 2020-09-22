/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class ReadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
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
      return (
        <div style={this.styles.container}>
          <iframe src={this.props.match.params.loc} width='90%' height='90%'>
            This browser does not support PDFs. Please download the PDF to view it: Download PDF
          </iframe>
          <Link to='/'>
            Back
          </Link>
        </div>
      );
  }
}

export default withRouter(ReadPage)
