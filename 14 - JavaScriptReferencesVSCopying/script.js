// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Wes";
let name2 = name;
console.log(name, name2);
name = "wesley";
console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
team[3] = "team 1";

console.log(players, team);

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const players2 = ["Wes", "Sarah", "Ryan", "Poppy"];

const team2 = players2.slice();
console.log(players2, team2);

team2[3] = "team 2";
console.log(players2, team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players2);
console.log(players2, team3);

team3[3] = "team 3";
console.log(players2, team3);

// or use the new ES6 Spread
const team4 = [...players2];
console.log(players2, team4);

team4[3] = "team 4";
console.log(players2, team4);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;

captain.number = 99;
console.log(person, captain);

// how do we take a copy instead?
const person2 = {
  name: "Wes Bos",
  age: 80,
};

const captain2 = Object.assign({}, person2, { number: 99 });
console.log(person2, captain2);

// We will hopefully soon see the object ...spread
const captain3 = { ...person2, number: 99 };
console.log(person2, captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes);

const dev = Object.assign({}, wes);
dev.name = "Wesley";
console.log(wes, dev);

dev.social.twitter = "@coolman";
console.log(wes, dev);

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = "@coolman2";
console.log(wes, dev2);
