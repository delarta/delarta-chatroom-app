import React, { Component } from 'react'
import {Form, Button, Container} from 'semantic-ui-react'

export class ChatWrite extends Component {
  state = {
    sender: '',
    message: ''
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});
  onSubmit = (e) =>{
    e.preventDefault();
    this.props.addReply(this.props.sender.email, this.state.message);
    this.setState({sender: '', message: ''});
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.TextArea name="message" value={this.state.message} onChange={this.onChange}/>
          <Form.Button content="Send" type="submit" labelPosition='left' icon='edit' color='teal'></Form.Button>
        </Form.Group>
      </Form>
      </Container>
    )
  }
}

export default ChatWrite
