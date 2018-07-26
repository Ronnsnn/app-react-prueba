import React, { Component, Fragment } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from "react-redux";
import { addUser } from "../actions/index";
import store from "../store/index";

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

class ConnectedContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      sent: false
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
    event.preventDefault();
    const nameInput = this.state.name;
    const jobInput = this.state.job; 

    fetch('https://reqres.in/api/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInput,
        job: jobInput,
      })
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      console.log('Success:', response);
      this.props.addUser({ nameInput , jobInput}); //
      this.setState({name: '', job: '', sent: true});
      console.log(store.getState());
    });
  }

  render() {
    return (
      <Fragment>
        <Form
          onSubmit={this.onSubmit}>
          <FormGroup row>
            <Label for="name" sm={2}>Nombre:</Label>
            <Col sm={10}>
              <Input type="text" value={this.state.name} name="name" id="name" placeholder="Nombre" onChange={this.onChange} required/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="job" sm={2}>Trabajo:</Label>
            <Col sm={10}>
              <Input type="text" value={this.state.job} name="job" id="job" placeholder="Trabajo" onChange={this.onChange} />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Enviar!</Button>
            </Col>
          </FormGroup>
        </Form>


        { this.state.sent && <Alert>Datos enviados</Alert>  }
      </Fragment>
    );
  }
}

const  Contact = connect(null, mapDispatchToProps)(ConnectedContact);

export default Contact;
