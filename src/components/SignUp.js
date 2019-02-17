import React, {Component}from 'react';
import {Header ,Button, Form} from 'semantic-ui-react';
import fire from '../config/Fire';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    // Add data to firestore database
    const db = fire.firestore();
    db.collection("users").add({
      name: this.state.name,
      email: this.state.email
    });
    // Create User
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return(
      <div style={{padding:'2em'}}>
        <Header as='h1'>Sign Up Page</Header>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SignUp
