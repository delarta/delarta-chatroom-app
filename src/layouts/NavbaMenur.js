import React, { Component } from 'react';
import fire from '../config/Fire';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class NavbaMenur extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }

  logout = () => {
    fire.auth().signOut();
  }

  handleShowClick = () => this.setState({ visible: true });
  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: false });

  render() {

    return (
      <div>
        <Button onClick={this.handleShowClick}>
          <Icon name='bars' />
        </Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >
        <Menu.Item as='a'>

        </Menu.Item>
        </Sidebar>

        </Sidebar.Pushable>
      </div>
    )
  }
}
