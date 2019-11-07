import React, { createContext } from 'react';

import store from 'stores';

export const Context = createContext();

export const Provider = ({ children }) => {
    return <Context.Provider value={{ ...store }}>{children}</Context.Provider>;
};
