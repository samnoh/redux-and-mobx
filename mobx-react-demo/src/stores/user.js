import { observable } from 'mobx';

import { api } from 'utils/api';

const userStore = observable({
    username: null,
    language: 'english',
    friends: [],
    login(username) {
        setTimeout(() => {
            this.username = username;
            this.getUserFriends();
        }, 500);
    },
    logout() {
        this.username = null;
        this.friends = [];
    },
    async getUserFriends() {
        try {
            const res = await api.get('/users');
            this.friends = res.data;
        } catch (e) {
            console.error(e);
        }
    },
    removeUserFriend(id) {
        this.friends.splice(this.friends.findIndex(f => f.id === parseInt(id, 10)), 1);
    }
});

export default userStore;
