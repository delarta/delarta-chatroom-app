import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCc3CmdXcewH0toY3qr3aHi9iZrkLeVd6Q",
  authDomain: "chat-app-c3fd0.firebaseapp.com",
  databaseURL: "https://chat-app-c3fd0.firebaseio.com",
  projectId: "chat-app-c3fd0",
  storageBucket: "chat-app-c3fd0.appspot.com",
  messagingSenderId: "144434076348"
};

class Firebase {
  constructor(){
    app.initializeApp(config);

    this.auth = app.auth;
  }
}

export default Firebase;