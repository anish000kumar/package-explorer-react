import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'tiny-react-router'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes'

ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));
registerServiceWorker();
