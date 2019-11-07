import React, { memo, useCallback } from 'react';
import { useObserver } from 'mobx-react';

import useStore from 'hooks/useStore';

const Friend = memo(({ id, name, email, onRemove }) => {
    return (
        <li onClick={onRemove} id={id}>
            {name} {email}
        </li>
    );
});

const FriendList = () => {
    const { userStore } = useStore();

    const onRemove = useCallback(e => {
        userStore.removeUserFriend(e.target.id);
    }, []);

    return useObserver(() => (
        <ul>
            {userStore.friends.map(f => (
                <Friend key={f.id} id={f.id} name={f.name} email={f.email} onRemove={onRemove} />
            ))}
        </ul>
    ));
};

export default FriendList;
