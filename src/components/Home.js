import React, {Component} from 'react';
import fire from '../config/Fire';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Landing from './Landing';
class Home extends Component {
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
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu}
          animation='push'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={this.state.visible}
          width='thin'
        >
        <Menu.Item as='a' to='/'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a' onClick={this.logout}>
          <Icon name='power off' />
          Logout
        </Menu.Item>
        
        </Sidebar>
        <Sidebar.Pusher>
          <Menu style={{borderRadius:'0', height:'50px'}} inverted>
            <Menu.Item as='a' onClick={this.handleShowClick}>
              <Icon name='bars' />
            </Menu.Item>
          </Menu>
          <Landing />
        </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      
    )
  }
}

export default Home
