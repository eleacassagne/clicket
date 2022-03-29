import React, { Component } from 'react';
import './Chat.css';

import Chatroom from './Chatroom.jsx';

class Chat extends Component {
  render() {
    return (
      <div className="Chat">
        <Chatroom />
      </div>
    );
  }
}

export default Chat;
