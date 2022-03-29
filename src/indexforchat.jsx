import React from 'react';
import ReactDOM from 'react-dom';
import './indexforchat.css';
import Chat from './Chat';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Chat />, document.getElementById('root'));
registerServiceWorker();