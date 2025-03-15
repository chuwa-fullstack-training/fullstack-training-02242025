'use strict'

// in case when there is no key 'name'
const obj = {
    name:'a',
    age:32,
};

let name = obj?.name;
console.log(name);