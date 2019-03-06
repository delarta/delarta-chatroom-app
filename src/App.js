import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Chatroom from "./components/Chatroom";
import ChatWrite from "./components/ChatWrite";
import Landing from "./components/Landing";

import Navside from './layouts/Navside';

import fire from './config/Fire';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = 
    {
    chats: [
    ],
    users:[],
    currentUser:{
    }
  }
  }

  componentDidMount() {
    this.authListener();
    const db = fire.firestore();
    db.collection('users').get().then(
      snapshot => {
        if (snapshot.empty) {
          console.log('no Matching documents.');
        }
        snapshot.forEach(doc => {
          this.setState({users: [...this.state.users, doc.data()]})
        });
        // console.log(this.state.users);
      }
    )

    db.collection('chats').orderBy('datetime').onSnapshot(
      snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if(change.type === 'added'){
            this.setState({chats: [...this.state.chats, change.doc.data()]})
          }
        })
      }
    )
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(user.email);
        this.setState({ user });
        this.setState({ currentUser: {email: user.email} });

      } else {
        this.setState({ currentUser: null });
        this.setState({user:null});
      }
    });
  }
  
  addReply = (sender, message) =>{
    const date = new Date();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : new Date().getMinutes();
    const newReply = {
      id: uuid.v4(),
      sender: sender,
      message: message,
      datetime: date.getHours() + ":" + minutes
    }
    const db = fire.firestore();
    db.collection('chats').add(newReply
    )
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            this.state.user ? <Navside><Landing sender={this.state.currentUser}/></Navside>  : <SignIn />
          )} />
          <Route path="/signin" render={props => (
            <SignIn/>
          )} />
          <Route path="/signup" component={SignUp} />
          <Route path="/chatroom" render={props =>(
            <Navside>
              <Chatroom sender={this.state.currentUser} chats={this.state.chats} />
              <ChatWrite sender={this.state.currentUser} addReply={this.addReply}/>
            </Navside>  
            )} />
        </div>
      </Router>
    );
  }
}

export default App;
