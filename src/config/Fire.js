import * as firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCc3CmdXcewH0toY3qr3aHi9iZrkLeVd6Q",
  authDomain: "chat-app-c3fd0.firebaseapp.com",
  databaseURL: "https://chat-app-c3fd0.firebaseio.com",
  projectId: "chat-app-c3fd0",
  storageBucket: "chat-app-c3fd0.appspot.com",
  messagingSenderId: "144434076348"
};

const fire = firebase.initializeApp(config);

export default fire;