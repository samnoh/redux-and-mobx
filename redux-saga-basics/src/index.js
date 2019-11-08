import store from './store';
import { loginAsync, logout, changeLanguage, getUserFriends } from 'actions/user';

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(loginAsync('user1'));
store.dispatch(getUserFriends());
