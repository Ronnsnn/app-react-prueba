import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './css/ListCards.css';



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    if(e.target.name === 'job') {
      this.setState({job: e.target.value});
    } else if (e.target.name === 'name'){
      this.setState({name: e.target.value});
    }
  }
  onSubmit(event) {
    console.log(this.state)
    event.preventDefault();
    fetch('https://reqres.in/api/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        job: this.state.job,
      })
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  render() {
    return (
      <Form
        action={this.props.action}
        method={this.props.method}
        onSubmit={this.onSubmit}>
        <FormGroup row>
          <Label for="name" sm={2}>Nombre</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" placeholder="Nombre" onChange={this.onChange} required/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="job" sm={2}>Trabajo</Label>
          <Col sm={10}>
            <Input type="text" name="job" id="job" placeholder="Trabajo" onChange={this.onChange} />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
Contact.defaultProps = {
  action: 'https://reqres.in/api/users',
  method: 'post'
};


export default Contact;
