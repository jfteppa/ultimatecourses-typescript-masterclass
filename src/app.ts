/**
 * Could not find a declaration file for module 'lodash'.
 * implicitly has an 'any' type.
 * Try `npm install @types/lodash` if it exists or
 * add a new declaration (.d.ts) file containing `declare module 'lodash';
 */
import * as _ from 'lodash';

/**
 * this function does not exist but because there is no types
 * it ts does not gives errors.
 */
// any
// _.abc();

// any
// _.chunk();
// the function chunk is a function on the lodash module
// but without the types we don't get any information of the function

// we will create a type declaration file that gives mor info
// at @types/lodash/index.d.ts

// function chunk(collection: any, size?: number | undefined): any[][]
// _.chunk
