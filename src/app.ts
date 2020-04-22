// module "lodash"
import * as _ from 'lodash';

// INFORMATION FROM @types/lodash
/**
 * LoDashStatic.chunk<number>(array: _.List<number> | null | undefined, size?: number | undefined): number[][]
 */
_.chunk([1, 2, 3, 4], 2);

// Property 'log' does not exist on type 'LoDashStatic'.
// _.log();

// to add it

_.mixin({
  log(item: string) {
    console.log(':::', item);
  },
});

// still the error after adding the function with the mixin
// Property 'log' does not exist on type 'LoDashStatic'.
_.log('Hello');

/***
 * LoDashStatic is an interface
 * in order to add type information we do so
 * by augmenting the module at the custom declartion
 * src/@types/lodash/index.d.ts
 */

// (method) LoDashStatic.log(item: string): void
_.log('Hello');

// Argument of type '123' is not assignable to parameter of type 'string'.
// _.log(123);
