import React, {Component} from 'react';
import fire from '../config/Fire';
import {Button, Header, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Home extends Component {

  logout = () => {
    fire.auth().signOut();
  }

  homeStyle = () => {
    return {
      minHeight: '100vh',
      paddingLeft: '2em',
      paddingRight: '2em'
    }
  }

  render() {
    return (
      <Segment inverted placeholder style={this.homeStyle()}>
        <Header as="h1">Hi , Welcome To Del's Chat</Header>
        <Button.Group>
          <Link to='/chatroom'>
          <Button size="large" color="teal">Chat Room</Button>
          </Link>
          <Button size="large" onClick={this.logout} inverted color="red">Logout</Button>
        </Button.Group>
      </Segment>
    )
  }
}

export default Home
