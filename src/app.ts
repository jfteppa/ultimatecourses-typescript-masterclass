class MyClass {
  public foo: string = '000';

  myMethod() {
    console.log('myMethod this', this);
    const foo = 123;
    console.log('myMethod foo', foo);
    console.log('myMethod this.foo', this.foo);

    const classContext = this;

    /**
     * everytime we create a new function
     * we are crrating a new scope.
     */
    setTimeout(function () {
      console.log('setTimeout foo', foo);

      /**
       * this.foo is undefined because this have a different scope
       * the contest is not longe MyClass.
       * this belongs to the scope of the setTimeout function.
       */
      console.log('setTimeout this.foo', this.foo);
      this.foo = 99999;
      console.log('setTimeout this.foo', this.foo);

      // this is from the window context.
      console.log('setTimeout this', this);

      console.log('classContext', classContext);
    }, 1000);
  }

  /**
   * this creates a new scope.
   */
  myMethod2() {
    const foo = 4562;
    console.log('myMethod2 foo', foo);
    console.log('myMethod2 this.foo', this.foo);
  }

  myMethod3() {
    console.log('myMethod3 this', this);

    /**
     * ARROW FUNCTIONS DOES NOT INHERITE THAT this VALUE
     * DOES NOT BIND AT this VALUE
     * IN OTHER WORDS IT DOES NOT BIND AND CHANGE THE VALUE OF this.
     */
    setTimeout(() => {
      console.log('setTimeout this', this);
    }, 1000);
  }
}
const myClassInstance = new MyClass();
myClassInstance.myMethod();
myClassInstance.myMethod2();
console.log('myClassInstance.foo', myClassInstance.foo);
myClassInstance.myMethod3();

console.log(this);

/**
 * ARROW FUNCTIONS DOES NOT INHERITE THAT this VALUE
 * DOES NOT BIND AT this VALUE
 * IN OTHER WORDS IT DOES NOT BIND AND CHANGE THE VALUE OF this.
 */
setTimeout(() => {
  console.log('setTimeout2 this', this);
}, 0);
