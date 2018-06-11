import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/SearchBar/SearchBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchBar />, document.getElementById('root'));
registerServiceWorker();
