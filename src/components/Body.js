import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

//Components
import ListCards from './ListCards';
import User from './User';
import Contact from './Contact';

class Body extends Component {
  render() {
    return (
      <div className='container content'>
        <Switch>
          <Route path='/' key='home' exact component={ListCards} />
          <Route exact path='/page/:page' key='page' component={ListCards} />
          <Route exact path='/user/:id'key='user' component={User} />
          <Route path='/contact' key='contact' exact component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default Body;
