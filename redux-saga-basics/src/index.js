import store from './store';
import { loginAsync, getUserFriends } from 'store/actions/user';

store.dispatch(loginAsync('username123'));
store.dispatch(getUserFriends(2));
