import { observable } from 'mobx';

import { api } from 'utils/api';

const userStore = observable({
    id: null,
    username: null,
    language: 'english',
    friends: [],
    login(username, id) {
        setTimeout(() => {
            this.username = username;
            this.id = id;
            console.log(this.id);
        }, 500);
    },
    logout() {
        this.username = null;
        this.id = null;
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
