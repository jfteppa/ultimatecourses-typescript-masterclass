function reverse(str: string): string;
// function reverse(arr: any[]): any[];
function reverse<T>(arr: T[]): T[];
function reverse<T>(something: string | T[]): string | T[] {
  if (typeof something === 'string') {
    return something.split('').reverse().join('');
  }
  // with slice we are making a copy and returning a new
  return something.slice().reverse();
}

reverse('Pepperoni');
reverse(['Bacon', 'Pepperoni', 'Chili']);

// 1/2 reverse(str: string): string
// 2/2 reverse(arr: any[]): any[]
// reverse();

// function reverse<string>(arr: string[]): string[] (+1 overload)
reverse(['Bacon', 'Pepperoni', 'Chili']);

// function reverse<number>(arr: number[]): number[] (+1 overload)
reverse([1, 2, 3]);
