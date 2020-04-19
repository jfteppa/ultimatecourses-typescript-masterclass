// Function
function myFunction() {
  console.log('myFunction Function:::', this);
  // this is my Window Object
}
myFunction();

// Object Literal
const myObj = {
  myObjectMethod() {
    console.log('myObjectMethod Object:::', this);
    // this is my Custom Object
  },
};
myObj.myObjectMethod();

// Class
class MyClass {
  myClassMethod() {
    console.log('myClassMethod Class:::', this);
    // this is my MyClass
  }
}
const myClassInstance = new MyClass();
myClassInstance.myClassMethod();
