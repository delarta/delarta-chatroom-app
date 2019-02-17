import React, {Component}from 'react';
import {Header ,Button, Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import fire from '../config/Fire';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit = (e) =>{
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return(
      <div style={{padding:'2em'}}>
        <Header as='h1'>Sign In Page</Header>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
          <Link to="/signup">Belum Punya akun? Klik disini</Link>
        </Form>
      </div>
    )
  }
}

export default SignIn
