import React, { createContext } from 'react';

import store from 'stores';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    return <StoreContext.Provider value={{ ...store }}>{children}</StoreContext.Provider>;
};

export default StoreContext;
