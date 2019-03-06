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
      <Container style={{paddingTop:'1em',paddingBottom:'1em;'}}>
        <Form onSubmit={this.onSubmit}>
          <Form.TextArea name="message" value={this.state.message} onChange={this.onChange}/>
          <Button type="submit" labelPosition='left' content="Send" icon='paper plane' secondary color='teal' fluid></Button>
      </Form>
      </Container>
    )
  }
}

export default ChatWrite
