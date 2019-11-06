import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

// import store from './store';
import App from './src/App';

const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector('#root'));
