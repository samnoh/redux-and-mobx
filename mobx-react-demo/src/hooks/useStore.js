import { useContext } from 'react';

import { Context as storeContext } from 'contexts/storeContext';

const useStore = () => {
    const store = useContext(storeContext);
    if (!store) throw Error('Store should not be null');

    return store;
};

export default useStore;
