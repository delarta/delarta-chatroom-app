import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

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
      <Form onSubmit={this.onSubmit}>
        <Form.TextArea name="message" value={this.state.message} onChange={this.onChange}/>
        <Button content="Add Reply" type="submit" labelPosition='left' icon='edit' color='teal'></Button>
      </Form>
    )
  }
}

export default ChatWrite
