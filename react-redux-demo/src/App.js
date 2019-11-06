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
            <div>{user.username}</div>
            {user.friends.map(f => (
                <li>{f.name}</li>
            ))}
            <button onClick={onClick}>Log in</button>
        </>
    );
};

export default App;
