import React, { Component } from 'react'
import {
  HashRouter,
  Route
} from "react-router-dom";
// import LoadPage from './LoadPage';
import ReadPage from './ReadPage';

class App extends Component {
  render() {
    return (
      <div style={{ widht: '100vw', height: '100vh', backgroundColor: 'rgba(234,134,232, 0.7)' }}>
        <HashRouter>
          <div>
            <Route path="/" exact    component={ ReadPage } />
            <Route path="/ReadPage"  component={ ReadPage } />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App
