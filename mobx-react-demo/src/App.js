import React, { useEffect, useCallback } from 'react';
import { useObserver, useLocalStore } from 'mobx-react';

import useStore from 'store';

const App = () => {
    const { userStore } = useStore();

    const state = useLocalStore(() => ({
        value: '',
        onChange(e) {
            this.value = e.target.value;
        },
        onSubmit(e) {
            e.preventDefault();
            this.value = '';
            userStore.login(this.value, 1);
        }
    }));

    useEffect(() => {
        userStore.getUserFriends();
    }, []);

    const onClick = useCallback(() => {
        userStore.username ? userStore.logout() : userStore.login(state.value, 1);
    }, []);

    const removeHandler = useCallback(e => {
        userStore.removeUserFriend(e.target.id);
    }, []);

    return useObserver(() => (
        <>
            <ul>
                {userStore.friends.map(f => (
                    <li onClick={removeHandler} key={f.id} id={f.id}>
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
            <button onClick={onClick}>{userStore.username ? 'Log out' : 'Log in'}</button>
        </>
    ));
};

export default App;
