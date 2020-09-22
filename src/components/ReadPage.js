/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import electron from 'electron';
import { withRouter, Link } from 'react-router-dom';

class ReadPage extends Component {
  constructor(props) {
    super(props);
    this.state = { annoyLevel: 0 }; // nothing here yet

    this.oldPos = electron.screen.getCursorScreenPoint();

    setInterval(this.moveSensor, 1000);

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
      },
      frame: {
        marginTop: 100,
        width: '75%',
        height: '100%',
        border: 'none',
        overflow: 'hidden',
      }
    }; 
  }

  moveSensor = () => {
    let pos = electron.screen.getCursorScreenPoint();
    console.log(pos);

    if ((this.oldPos.x - pos.x)**2 < this.breakPoint){
      this.setState((prev) => {
        return {
          annoyLevel: 1
        }
      });
    } else {

    }
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
