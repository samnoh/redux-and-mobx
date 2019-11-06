import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import store from './src/store';
import App from './src/App';

const Hot = hot(App);

ReactDOM.render(
    <Provider store={store}>
        <Hot />
    </Provider>,
    document.querySelector('#root')
);
