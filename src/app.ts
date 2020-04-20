const person = {
  name: 'Teppa',
  age: 33,
};

type Person = typeof person;

const anotherPerson: Person = {
  name: 'John',
  age: 30,
};

/**
 * Union of keys, in this case "name" | "age" (hover on PersonKeys)
 * again only on ts not js.
 * "name" or "age" are not types but I can see the keys
 */
type PersonKeys = keyof Person;

/**
 * this will give us the union of the types of the keys
 * in this case string | number (hover on PersonTypes)
 */
type PersonTypes = Person[PersonKeys];

// const anotherPerson2: PersonKeys = {};

// const anotherPerson3: PersonTypes = {};

class Aux {
  public arg1: PersonKeys;
  public arg2: PersonTypes;
  public arg3: number;
  public arg4: string;
}

const auxInst = new Aux();
// auxInst.arg1 = 1; // "name" or "age" are not types
// auxInst.arg1 = 'string'; // "name" or "age" are not types

auxInst.arg2 = 1; // string | number
auxInst.arg2 = 'string'; // string | number

auxInst.arg3 = 1;
// auxInst.arg3 = 'string'; // only umber

// auxInst.arg4 = 1; // only string
auxInst.arg4 = 'string';
