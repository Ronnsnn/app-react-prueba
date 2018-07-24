import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './css/ListCards.css'
import Cards from './Cards';

class ListCards extends Component {
  constructor() {
    super();
    this.state = {
      pageData: []
    }
  }
  componentDidMount() {
      var URL = 'https://reqres.in/api/users';
      if (this.props.match.params.page) {
        URL = URL + '?page=' + this.props.match.params.page;
      }
      fetch(URL).
        then(results => { return results.json() }).
        then(data => {
          let page = {
            actual: data.page,
            total: data.total_pages
          }
          this.setState({ pageData: page });
        });
    
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/:page' key='groups' component={Cards} />
        </Switch>
        <div className="row">
          <ul className='pagination'>
            { Array.from(new Array(this.state.pageData.total), (x, i) => {
                return (
                  <li className='page-item' key={1+i} >
                    <a href={1 + i} className='page-link'>{1 + i}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ListCards;
