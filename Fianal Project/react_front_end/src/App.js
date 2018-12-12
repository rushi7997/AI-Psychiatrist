import React, { Component } from 'react';
// import './App.css';
import Chat from './components/index';
import './components/new.css'

class App extends Component {
  render() {
    return (
        <div className='b-chat'>
            <div className='b-chat__container'>
                <Chat id = 'chat'/>
            </div>
        </div>
    );
  }
}

export default App;
