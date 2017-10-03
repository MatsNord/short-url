import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form action="#" id="greeting-form">
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React URL Shorterner</h1>
            </header>
            <p className="App-intro">Enter a Url</p>
            <div className="container">
              <div className="mdc-form-field">
                <div className="mdc-textfield" data-mdc-auto-init="MDCTextfield">
                  <input id="url" type="text" class="mdc-textfield__input" />
                </div>
              </div>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">shorten</button>
            </div>
          </div>
        </form>
        <p className="mdc-typography--headline" id="greeting"></p>
      </div>
    );
  }
}

export default App;
