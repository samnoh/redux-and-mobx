import { useContext } from 'react';

import { Context as storeContext } from 'contexts/storeContext';

const useStore = () => {
    const store = useContext(storeContext);

    return store;
};

export default useStore;
