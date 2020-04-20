const person = {
  name: 'Teppa',
  age: 33,
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

// generic types, in this case T and K
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// hover on personName we will see string
const personName = getProperty(person, 'name');
console.log(
  'personName: ',
  personName,
  ' personName typeof:',
  typeof personName
);

// hover on personAge we will see number
const personAge = getProperty(person, 'age');
console.log('personAge: ', personAge, ' personAge typeof:', typeof personAge);

// const personTest = getProperty(person, 'names'); // does not exist on Person
// const personTest2 = getProperty(person, 'ages'); // does not exist on Person

const person2 = {
  male: true,
  arr: [1, 2, 3],
};

// hover on personGender we will see boolean
const personGender = getProperty(person2, 'male');

// hover on arr we will see number[]
const arr = getProperty(person2, 'arr');
