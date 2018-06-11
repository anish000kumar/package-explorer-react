import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import PackageDetail from './components/PackageDetail/PackageDetail'

// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<PackageDetail />, document.getElementById('root'));
registerServiceWorker();
