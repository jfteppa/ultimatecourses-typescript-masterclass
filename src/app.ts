const elem = document.querySelector('.click');

function handleClick(event: Event) {
  event.preventDefault();
  console.log('handleClick this', this);
  /**
   * at this point "this" is the dom element and we can try something like
   * this.href but when hovering the "this" it will be type any
   *
   * We change the tsconfig and add the noImplicitThis.
   * after this the "this" will be red
   */
}

// elem.addEventListener('click', handleClick, false);
elem.addEventListener('click', handleClick2, false);

/**
 * typing "this"
 * it will look like an argument
 * however it is not an argument of the function
 * and it will not affect the other arguments
 *
 * when typing the "this" and hovering on it
 * it will show more info and when looking for its elements or functions
 * with "." we will be able to se them
 *
 * event still the 1st actually argument.
 */
function handleClick2(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log('handleClick2 this.href', this.href);
  console.log('handleClick2 this.className', this.className);
}
