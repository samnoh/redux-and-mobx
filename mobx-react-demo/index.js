import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './src/App';
import { Provider as StoreProvider } from './src/contexts/storeContext';

const Hot = hot(App);

ReactDOM.render(
    <StoreProvider>
        <Hot />
    </StoreProvider>,
    document.querySelector('#root')
);
