import { api } from 'utils/api';

export const USER_LOGIN = 'user/LOGIN';
export const USER_LOGOUT = 'user/USERLOGOUT';
export const USER_CHANGE_LANGUAGE = 'user/CHANGE_LANGUAGE';
export const GET_USER_FRIENDS = 'user/GET_FRIENDS';
export const REMOVE_USER_FRIEND = 'user/REMOVE_FRIEND';

export const login = (username, id) => (dispatch, getState) => {
    try {
        setTimeout(() => {
            dispatch(loginAction(username, id));
        }, 1000);
    } catch (e) {
        console.error(e);
    }
};

const loginAction = (username, id) => ({
    type: USER_LOGIN,
    payload: {
        username,
        id
    }
});

export const logout = () => ({
    type: USER_LOGOUT
});

export const changeLanguage = language => ({
    type: USER_CHANGE_LANGUAGE,
    payload: language
});

export const getUserFriends = () => async (dispatch, getState) => {
    try {
        // dispatch(success)
        const res = await api.get('/users');
        dispatch(getUserFriendsAction(res.data));
    } catch (e) {
        console.error(e);
        // dispatch(failure)
    }
};

const getUserFriendsAction = friends => ({
    type: GET_USER_FRIENDS,
    payload: friends
});

export const removeUserFriend = id => ({
    type: REMOVE_USER_FRIEND,
    payload: id
});
