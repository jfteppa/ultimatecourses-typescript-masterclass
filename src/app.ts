console.log('hello');

// "strictPropertyInitialization": true
// Examples
class Person {
  name: string;
}

class Person2 {
  name: string;
  constructor(public name: string) {}
}

class Person2 {
  constructor(public name: string) {}
}

class Person3 {
  constructor(public name: string) {
    this.name = name;
  }
}

class Person4 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
