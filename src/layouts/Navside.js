import React, {Component} from 'react';
import fire from '../config/Fire';
import { Icon, Menu, Segment, Sidebar, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Navside extends Component {
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
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={this.state.visible}
          width='wide'
        >
        <Menu.Item>
          <Image src="/assets/img/del_logo_light.png" />
        </Menu.Item>
        
          <Link to='/'>
          <Menu.Item>
          <Icon name='home' />
            Home
          </Menu.Item>
            
          </Link>
        <Menu.Item onClick={this.logout}>
          <Icon name='power off' />
          Logout
        </Menu.Item>
        
        </Sidebar>
        <Sidebar.Pusher>
          <Menu style={{borderRadius:'0', height:'50px',margin:'0'}} inverted>
            <Menu.Item as='a' onClick={this.handleShowClick}>
              <Icon name='bars' />
            </Menu.Item>
          </Menu>
          {this.props.children}
        </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      
    )
  }
}

export default Navside
