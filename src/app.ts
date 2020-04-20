interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: 'Juan',
};

function printAge(person: Person) {
  return `${person.name} is ${person.age}`;
}
const age = printAge(person);
console.log(age);

type MyRequired<T> = {
  // [P in keyof T]?: T[P];
  // both are the same.
  // [P in keyof T]+?: T[P];

  // we have the + to add
  // and the - to remove
  [P in keyof T]-?: T[P];

  // -readonly [P in keyof T]-?
  // +readonly [P in keyof T]+?
};

function printAge2(person: MyRequired<Person>) {
  return `${person.name} is ${person.age}`;
}

// person.age = 10;
// const age2 = printAge2(person); // error

const person2: MyRequired<Person> = {
  name: 'Juan',
  age: 33,
};

const age2 = printAge2(person2);
console.log(age2);

// TS Built-in
function printAge3(person: Required<Person>) {
  return `${person.name} is ${person.age}`;
}

/**
 * Property 'age' is missing in type '{ name: string; }'
 * but required in type 'Required<Person>'
 */
/* const person3: Required<Person> = {
  name: 'Juan'
}; */

const person4: Required<Person> = {
  name: 'Juan',
  age: 23,
};
const age4 = printAge3(person4);
console.log(age4);
