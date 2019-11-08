import React from 'react';

import AuthPage from 'pages/AuthPage';
import { StoreProvider } from 'contexts/storeContext';

const App = () => {
    return (
        <StoreProvider>
            <AuthPage />
        </StoreProvider>
    );
};

export default App;
