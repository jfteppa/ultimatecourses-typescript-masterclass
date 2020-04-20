console.log(typeof ''); // string
console.log(typeof []); // object

// inferring types (hover on object const)
const person = {
  name: 'Teppa',
  age: 33,
};

type Person = typeof person;

// JavaScript > typeof person == object
console.log(typeof person);

/**
 * TypeScript will inferring the type of object person. (hover on type Person)
 * Remember this is for TypeScript, not the js compiled.
 * Just to get move features for development.
 */

const anotherPerson: Person = {
  name: 'John',
  age: 30,
  // gender: 'male' // this will give us error
};

const anotherPerson2: typeof person = {
  name: 'John',
  age: 30,
};
