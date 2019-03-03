import React, { Component } from 'react'
import { Button, Header, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Landing extends Component {

  homeStyle = () => {
    return {
      minHeight: '100vh',
      paddingLeft: '2em',
      paddingRight: '2em',
      paddingTop: '10vh'
    }
  }

  render() {
    return (
      <div style={this.homeStyle()}>
        <Image src="/assets/img/del_logo_transparent.png" size="small" centered/>
        <Header as="h1">Hi , Welcome To Del's Chat</Header>
        <p>This is a simple chat room apps created using ReactJS and Firebase Fire store, Please Enjoy!</p>
          <Link to='/chatroom'>
          <Button size="large" color="teal" fluid>Go to Chat Room!</Button>
          </Link>
      </div>
    )
  }
}
