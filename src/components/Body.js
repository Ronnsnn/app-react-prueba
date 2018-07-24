import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

//Components
import ListCards from './ListCards';
import User from './User';

class Body extends Component {
  render() {
    return (
      <div className='container'>
        <Switch>
          <Route exact path='/' key='home' component={ListCards} />
          <Route exact path='/:page' key='page' component={ListCards} />
          <Route path='/user/:id' component={User} />
        </Switch>
      </div>
    );
  }
}

export default Body;
