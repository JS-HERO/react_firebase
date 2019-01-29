import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const config = {
    apiKey: "AIzaSyDa3LzmvD3mXm0bdL48bNvXmOho5o8OxyI",
    authDomain: "pseudogram-10cfc.firebaseapp.com",
    databaseURL: "https://pseudogram-10cfc.firebaseio.com",
    projectId: "pseudogram-10cfc",
    storageBucket: "pseudogram-10cfc.appspot.com",
    messagingSenderId: "1085581515016"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
