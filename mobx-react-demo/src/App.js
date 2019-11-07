import React, { useEffect, useCallback } from 'react';
import { useObserver, useLocalStore } from 'mobx-react';

import useStore from 'hooks/useStore';

const App = () => {
    const { userStore } = useStore();

    const state = useLocalStore(() => ({
        value: '',
        onChange(e) {
            this.value = e.target.value;
        },
        onSubmit(e) {
            e.preventDefault();
            userStore.login(this.value, 1);
            this.resetValue();
        },
        resetValue() {
            this.value = '';
        }
    }));

    useEffect(() => {
        userStore.getUserFriends();
    }, []);

    const onAuth = useCallback(() => {
        userStore.username ? userStore.logout() : userStore.login(state.value, 1);
    }, []);

    const onRemove = useCallback(e => {
        userStore.removeUserFriend(e.target.id);
    }, []);

    return useObserver(() => (
        <>
            <ul>
                {userStore.friends.map(f => (
                    <li onClick={onRemove} key={f.id} id={f.id}>
                        {f.name} {f.email}
                    </li>
                ))}
            </ul>
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

export default App;
