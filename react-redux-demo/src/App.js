import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, getUserFriends, removeUserFriend } from 'actions/user';

const App = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { username } = user;

    useEffect(() => {
        dispatch(getUserFriends());
    }, []);

    const onAuth = useCallback(() => {
        username ? dispatch(logout()) : dispatch(login('user A', 1));
    }, [username]);

    const onRemove = useCallback(e => {
        dispatch(removeUserFriend(e.target.id));
    }, []);

    return (
        <>
            <ul>
                {user.friends.map(f => (
                    <li onClick={onRemove} key={f.id} id={f.id}>
                        {f.name} {f.email}
                    </li>
                ))}
            </ul>
            {username ? <div>Your username: {username}</div> : <div>Please Log in</div>}
            <button onClick={onAuth}>{username ? 'Log out' : 'Log in'}</button>
        </>
    );
};

export default App;
