import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, getUserFriends } from 'actions/user';

const App = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { username } = user;

    useEffect(() => {
        dispatch(getUserFriends());
    }, []);

    const onClick = useCallback(() => {
        if (username) {
            return dispatch(logout());
        }
        return dispatch(login('user A', 1));
    }, [username]);

    return (
        <>
            <ul>
                {user.friends.map(f => (
                    <li>
                        {f.name} {f.email}
                    </li>
                ))}
            </ul>
            {username ? <div>Your username: {username}</div> : <div>Please Login</div>}
            <button onClick={onClick}>{username ? 'Log out' : 'Log in'}</button>
        </>
    );
};

export default App;
