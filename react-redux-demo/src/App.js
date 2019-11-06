import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, getUserFriends } from 'actions/user';

const App = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFriends());
    }, []);

    const onClick = useCallback(() => {
        dispatch(login('user A', 1));
    }, []);

    return (
        <>
            <ul>
                {user.friends.map(f => (
                    <li>{f.name}</li>
                ))}
            </ul>
            <div>{user.username}</div>
            <button onClick={onClick}>Log in</button>
        </>
    );
};

export default App;
