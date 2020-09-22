import React, { Component } from 'react'
import {
  HashRouter,
  Route
} from "react-router-dom";
import LoadPage from './LoadPage';
import ReadPage from './ReadPage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact    component={ LoadPage } />
          <Route path="/ReadPage"  component={ ReadPage } />
        </div>
      </HashRouter>
    )
  }
}

export default App
