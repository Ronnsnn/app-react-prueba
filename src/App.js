import React, { Component } from 'react';

//Components
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
