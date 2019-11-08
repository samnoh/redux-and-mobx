import { useContext } from 'react';

import StoreContext from 'contexts/storeContext';

const useStore = () => {
    const store = useContext(StoreContext);

    if (!store) {
        throw Error('Store should not be null');
    }

    return store;
};

export default useStore;
