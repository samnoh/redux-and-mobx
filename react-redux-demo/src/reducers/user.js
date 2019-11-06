import produce from 'immer';
import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_CHANGE_LANGUAGE,
    GET_USER_FRIENDS,
    REMOVE_USER_FRIEND
} from 'actions/user';

const initialState = {
    username: null,
    language: 'english',
    friends: [],
    id: null
};

const userReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case USER_LOGIN:
                draft.username = action.payload.username;
                draft.id = action.payload.id;
                break;
            case USER_LOGOUT:
                draft.username = null;
                draft.id = null;
                break;
            case USER_CHANGE_LANGUAGE:
                draft.language = action.payload;
                break;
            case GET_USER_FRIENDS:
                draft.friends = action.payload;
                break;
            case REMOVE_USER_FRIEND:
                draft.friends.splice(
                    draft.friends.findIndex(f => f.id === parseInt(action.payload, 10)),
                    1
                );
                break;
            default:
                break;
        }
    });

export default userReducer;
