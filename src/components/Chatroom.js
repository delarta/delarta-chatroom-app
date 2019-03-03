import React, { Component } from 'react'
import ChatItem from './ChatItem'
export class Chatroom extends Component {
  cRoomStyle = () => {
    return {
      maxWidth: '800px',
      background: '#f4f4f4',
      padding: '2em'
    }
  }
  render() {
    return (
      <React.Fragment>
        <div style={this.cRoomStyle()}>
          {this.props.chats.map((chat) => 
          <ChatItem key={chat.id} chat={chat} sender={this.props.sender}  />)}
        </div>
      </React.Fragment>
    )
  }
}

export default Chatroom
