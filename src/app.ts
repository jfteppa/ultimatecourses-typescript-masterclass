let dictionary: { [key: string]: any } = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: TrackStates = {
  current: '123',
  next: '456',
};

/**
 * if we look at the type definition
 * the key is a string
 * but we asigned to be number zero (0)
 * but this is not TS this is how JS indexes
 * and it will actually convert the number into string
 */

// Numbers are coerced/change type to String
dictionary[0] = item; // == dictionary['0'] = item;

// Built-in
/*
  // Construct a type with a set of properties K of type T

  // 1st arg generic type
  // K is a subtype of the generic string
  // 
  type Record<K extends keyof any, T> = {
      [P in K]: T;
  };
 */

let dictionary2: Record<string, TrackStates> = {};

// we can make it more restrictive and not use the interface and only use values
const item2: Record<'current' | 'next', string> = {
  current: '789',
  next: '012',
};
// item2.test = 'a';

// we can also use the interface
const item3: Record<keyof TrackStates, string> = {
  current: '345',
  next: '678',
};

// if we do not have access to the TrackStates interface we can do this
let dictionary3: Record<string, typeof item3> = {};

dictionary[1] = item2;
dictionary[2] = item3;

console.log(item);
console.log(item2);
console.log(item3);
console.log(dictionary);
