// Object Literal
const myObj = {
  myObjectMethod() {
    console.log('myObjectMethod Object:::', this);
    // this is my Custom Object
  },
};
// myObj.myObjectMethod();

// Function
function myFunction(text: string, arg2: string) {
  console.log('myFunction Function:::', this, text, arg2);
  // this is my Window Object
}
myFunction('ABC', 'DEF');

/**
 * it will call the funciton
 * but it changes context
 */
myFunction.call(myObj, 'call', 'DEF');

myFunction.call([]);

/**
 * difference between call and apply is
 * apply passes the arguments in array and call
 * passes the arguments comma separated.
 */
myFunction.apply(myObj, ['apply', 'DEF']);

/**
 * c = call = comma
 * a = apply = array
 */

/**
 * .bind let us change the context ahead of time
 * call and apply invoke the funciton,
 * .bind does not call the function but returns a new bind function
 *
 */

console.log('======================================');

class myClass {
  myCalssMethod2() {
    console.log('myCalssMethod2', this);
  }
}
const bindFunction = myFunction.bind(myClass, 'bind', '123');

myFunction.call(myObj, 'call', 'DEF');
myFunction.apply(myObj, ['apply', 'DEF']);

bindFunction(); // arguments does not change
bindFunction('bind', '456'); // arguments does not change

/**
 * this way we can change the arguments after binding
 * with the new context
 */
const bindFunction2 = myFunction.bind(myClass);
bindFunction2();
bindFunction2('bind', '789');
