import { observable, autorun, reaction, action, runInAction } from 'mobx';

const userState = observable({
    name: 'John',
    age: 20,
    company: null
});

const postState = observable([]);

// detect any updates of state
autorun(() => {
    console.log(userState, postState);
});

reaction(() => userState.name, (value, reaction) => console.log(value)); // detect the updates of certain state

const change = action(() => {
    postState.push({ id: 1, content: 'MobX' });
});

change();

// very similar to action() but execute it immediately
runInAction(() => {
    userState.name = 'Kevin';
    userState.age = 22;
    userState.company = 'world';
});

console.log('Current state: ', userState, postState);

// class UserStore {
//     @observable name = 'John';

//     @action
//     changeName(name) {
//         this.name = name;
//     }
// }
