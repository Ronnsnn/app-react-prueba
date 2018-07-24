import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './css/ListCards.css'


class Cards extends Component {
  constructor() {
    super();
    this.state = {
      users: []
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
        let info = data.data.map((element) => {
          return (
            <Col key={element.id} md={4}>
              <Card >
                <CardImg top src={element.avatar} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{element.first_name + ' ' + element.last_name}</CardTitle>
                  <CardSubtitle>subtitle</CardSubtitle>
                  <CardText>Text.</CardText>
                  <Link to={'/user/' + element.id} className='btn btn-info'>Ver más</Link>
                </CardBody>
              </Card>
            </Col>
          );
        }
        );
        this.setState({ users: info });
      });
  }

  render() {
    return (
        <Row>
          {this.state.users.length > 0  ? this.state.users : <h2>Wait</h2>}
        </Row>
    );
  }
}

export default Cards;
