import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    var URL = 'https://reqres.in/api/users/' + this.props.match.params.id;
    fetch(URL).
      then(results => { return results.json() }).
      then(data => {
        let info = data.data;
        
      this.setState({ user: info });
    });
  }

  render() {
    
    return (
      <div>
        <h1>{ this.state.user.first_name + ' ' + this.state.user.last_name}</h1>
        <p> Avatar link: <a href={this.state.user.avatar}>{this.state.user.avatar}</a></p>
        <Link to='/contact'>asd</Link>
      </div>
    );
  }
}

export default User;
