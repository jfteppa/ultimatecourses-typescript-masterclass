interface Person {
  name: string;
  age: number;
  address: {};
  gender: string;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const person: MyPick<Person, 'name' | 'age'> = {
  name: 'Juan',
  age: 33,
};

// Built-in Pick<T>
// with Pick we just tell what properties we want
const perso2: Pick<Person, 'name' | 'gender'> = {
  name: 'Juan',
  gender: 'Male',
};

// with partial we make all the properties optional
const person3: Partial<Person> = {};
