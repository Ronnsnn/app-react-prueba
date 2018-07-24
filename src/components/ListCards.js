import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './css/ListCards.css'
import Cards from './Cards';

class ListCards extends Component {
  constructor() {
    super();
    this.state = {
      actual: [],
      total_pages: []
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
          this.setState({ actual: data.page,
            total_pages: data.total_pages });
        });
    
  }
  changePage(page) {
    this.setState({ actual: page });
  }
  render() {
    return (
      <div>
        <Cards page={this.state.actual}/>
        <div className="row">
          <ul className='pagination'>
            { Array.from(new Array(this.state.total_pages), (x, i) => {
                return (
                  <li className='page-item' key={1+i} >
                    <Link to={`/page/${1 + i}`} className='page-link' onClick={() => this.changePage(1 + i)}>{1 + i}</Link>
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
