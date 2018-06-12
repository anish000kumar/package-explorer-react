import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'tiny-react-router'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes'
import Home from './components/Home/Home'

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
