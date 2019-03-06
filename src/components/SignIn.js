import React, {Component}from 'react';
import {Header ,Button, Form, Image} from 'semantic-ui-react';
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

  loginStyle = () =>{
    return {
      padding: '2em',
    }
  }
  render() {
    return(
      <div style={this.loginStyle()}>
        <Image src="/assets/img/del_logo_black.png" size="small" centered/>
        <Header as='h1' style={{textAlign:'center'}}>Sign In</Header>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
          </Form.Field>
          <Button type='submit' secondary color="teal">Sign In</Button>
          
          <Link  to="/signup">
          <Button style={{float:'right'}} >Sign Up</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default SignIn
