import * as lodash from 'lodash';

declare module 'lodash' {
  /**
   * because LoDashStatic is an interface
   * we can merge declarations of an interface
   * in other words redeclare the interface (same name)
   * with new information, in this case the new log function
   */
  interface LoDashStatic {
    log(item: string): void;
  }
}
