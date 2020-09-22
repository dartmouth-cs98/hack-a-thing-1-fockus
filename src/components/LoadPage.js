import React, { Component } from 'react'

class LoadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet

    this.styles = {
      container: {
        width: '100%',
        height: '100%',
      }
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        bowow
      </div>
    );
  }
}

export default LoadPage