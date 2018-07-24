import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import loading from '../assets/loading.gif'
import './css/ListCards.css';



class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.getApiData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page)
      this.getApiData();
  }

  getApiData() {
    this.setState({ users: [] });
    var URL = 'https://reqres.in/api/users';
    if (this.props.page) {
      URL = URL + '?page=' + this.props.page;
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
        {this.state.users.length > 0 ? this.state.users : <div className='loading'><img src={loading} alt=''/></div>}
      </Row>
    );
  }
}

export default Cards;
