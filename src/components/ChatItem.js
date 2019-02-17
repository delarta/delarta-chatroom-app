import React, { Component } from 'react'
import { Comment} from 'semantic-ui-react';

export class ChatItem extends Component {
  chatStyle = () => {
    return {
     textAlign:this.props.chat.sender === this.props.sender.email ? 'right' : 'left'
    }
  }

  render() {
    const {message, datetime, sender} = this.props.chat;
    return (
      <Comment.Group>
        <Comment >
          <Comment.Content style={this.chatStyle()}>
            <Comment.Author as='a' style={{color:sender === this.props.sender.email ? 'teal' : 'black'}}>{sender}</Comment.Author>
            <Comment.Metadata>
              {datetime ? datetime : ''}
            </Comment.Metadata>
            <Comment.Text>
              {message}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
  }
}

export default ChatItem
