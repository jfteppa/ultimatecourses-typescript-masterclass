/* 
  it gives error because eve thought 
  in the tsconfig-base noImplicitAny is false
  on src/tsconfig we inherite the options and overwrite
*/
function log(message) {}
function log2(message: string) {}
