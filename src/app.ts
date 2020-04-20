interface Person {
  name: string;
  age: number;
  gender: string;
}

interface ReadOnlyPerson {
  readonly name: string;
  readonly age: number;
}

const person: Person = {
  name: 'Juan',
  age: 33,
  gender: 'male',
};

/**
 * lets make our obj inmutable
 * const does not let you reasign
 * but it lets you change/mutate it's property values
 */

person.name = 'ABC';

function freezePerson(person: Person): ReadOnlyPerson {
  return Object.freeze(person);
}

// newPerson: ReadOnlyPerson
const newPerson = freezePerson(person);

// Cannot assign to 'name' because it is a read-only property.
// newPerson.name = 'ABC';
// newPerson.gender we need to add it to the ReadOnlyPerson interface

/**
 * we don't need the interface to return a readonly object,
 * if we add another property this will take care of it
 * with the interface we need to declare all of them
 */
function freezePerson2(person: Person) {
  return Object.freeze(person);
}

// const newPerson2: Readonly<Person>
const newPerson2 = freezePerson2(person);

// newPerson2.name = 'ABC';

// it takes care of all of the properties in the object
// newPerson2.gender = 'female';

// we can rewrite the function to be more generic

function freezeObj(obj: object) {
  return Object.freeze(obj);
}

// let newPerson3: object
const newPerson3 = freezeObj(person);

// with the example above we don't know the type of newPerson3

/**
 *
 * getting the type of the object
 * we know freezePerson2 returns Readonly<Person>
 * we need to return Readonly<ObjectType>
 * We are mapping the return object to the type
 * of the received object
 */
function freezeObjType<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

// const newPerson4: Readonly<Person>
const newPerson4 = freezeObjType(person);

type MyReadOnly<ObjectType> = {
  readonly [ObjProperty in keyof ObjectType]: ObjectType[ObjProperty];
};

function freeze<T>(obj: T): MyReadOnly<T> {
  return Object.freeze(obj);
}

// const np: MyReadOnly<Person>
const np = freeze(person);

// Cannot assign to 'age' because it is a read-only property.ts(2540)
// np.age = 123
