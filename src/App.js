import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    /*States*/ 
  };
  this.handleAuth = this.handleAuth.bind(this);
}
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const loginGoogle = firebase.auth().signInWithPopup(provider);
    loginGoogle.then(result => console.log(`${result.user.email} ha iniciado sesion`));
    loginGoogle.catch(error => console.log(`Error ${error.code}: ${error.message}`));

    /*firebase.auth().signInWithPopup(provider)
      .then((result) => console.log(`${result.user.email} ha iniciado sesion`))
      .cath((error) => console.log(`Error ${error.code}: ${error.message}`));*/
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>PseudoIntagram</h2>
        </header>
        <button onClick={this.handleAuth}> login con google</button>
      </div>
    );
  }
}

export default App;
