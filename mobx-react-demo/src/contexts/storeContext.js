import React, { createContext } from 'react';

import { userStore } from 'stores';

export const Context = createContext();

export const Provider = ({ children }) => {
    return <Context.Provider value={{ userStore }}>{children}</Context.Provider>;
};
