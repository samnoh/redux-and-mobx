import { observable, autorun, reaction, computed, action, runInAction } from 'mobx';

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

// computed
const calculator = observable({
    a: 1,
    b: 2
});

const sum = computed(() => {
    console.log('Calculating...');
    return calculator.a + calculator.b;
});

sum.observe(() => calculator.a);
sum.observe(() => calculator.b);

calculator.a = 10;
calculator.b = 20;

console.log(sum.value);
console.log(sum.value);
console.log(sum.value);
console.log(sum.value);

calculator.a = 20;
console.log(sum.value);

// class UserStore {
//     @observable name = 'John';

//     @action
//     changeName(name) {
//         this.name = name;
//     }
// }
