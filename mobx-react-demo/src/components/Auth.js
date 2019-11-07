import React, { useCallback } from 'react';
import { useObserver, useLocalStore } from 'mobx-react';

import useStore from 'hooks/useStore';

const Auth = () => {
    const { userStore } = useStore();

    const state = useLocalStore(() => ({
        value: '',
        onChange(e) {
            this.value = e.target.value;
        },
        onSubmit(e) {
            e.preventDefault();
            userStore.login(this.value);
            this.resetValue();
        },
        resetValue() {
            this.value = '';
        }
    }));

    const onAuth = useCallback(() => {
        userStore.username ? userStore.logout() : userStore.login(state.value, 1);
    }, []);

    return useObserver(() => (
        <>
            {userStore.username ? (
                <div>Your username: {userStore.username}</div>
            ) : (
                <form onSubmit={state.onSubmit}>
                    <input
                        type="text"
                        placeholder="Username..."
                        value={state.value}
                        onChange={state.onChange}
                    />
                </form>
            )}
            <button onClick={onAuth}>{userStore.username ? 'Log out' : 'Log in'}</button>
        </>
    ));
};

export default Auth;
