interface Person {
  name: string;
  age: number;
}

interface PartialPerson {
  name?: string;
  age?: number;
}

function updatePerson(person: Person, prop: PartialPerson) {
  return { ...person, ...prop };
}

const person: Person = {
  name: 'Juan',
  age: 33,
};

const newPerson = updatePerson(person, { name: 'ABC' });
console.log('newPerson', newPerson);

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

function updatePerson2(person: Person, prop: MyPartial<Person>) {
  return { ...person, ...prop };
}

const newPerson2 = updatePerson2(person, { name: 'Juan Felipe' });
console.log('newPerson2', newPerson2);

// TS BuiltIn

function updatePerson3(person: Person, prop: Partial<Person>) {
  return { ...person, ...prop };
}

const newPerson3 = updatePerson3(person, { name: 'Juan Felipe 2' });
console.log('newPerson3', newPerson3);

// Generic
function updateObj<T>(obj: T, prop: Partial<T>) {
  return { ...obj, ...prop };
}

const newPerson4 = updateObj(person, { name: 'Juan Felipe 3' });

// gender does not exist
// const newPerson5 = updateObj(person, { gender: 'female' });
