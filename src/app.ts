const enum Sizes {
  Small = 'small',
  Medium = 'medium',
  // Large = 3, this is also possible, to mix
  Large = 'large',
}

// compiles into
/**
  var Sizes;
  (function (Sizes) {
      Sizes["Small"] = "small";
      Sizes["Medium"] = "medium";
      Sizes["Large"] = "large";
  })(Sizes || (Sizes = {}));
 */

let selected: Sizes;
console.log(selected);

function updateSize(size: Sizes): void {
  selected = size;
}

updateSize(Sizes.Large);
console.log('selected', selected);

let selected2: Sizes = Sizes.Small;
console.log(selected2);

function updateSize2(size: Sizes): void {
  selected2 = size;
}

updateSize2(Sizes.Large);

console.log('selected2', selected2);

/**
 * the enum function in js is written for us
 * but if we want to avoid all this code generated
 * we can use an inline member
 * we just make the enum as a const
 */

enum Sizes2 {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// will not generate the code
/**
  var Sizes2;
  (function (Sizes2) {
      Sizes2["Small"] = "small";
      Sizes2["Medium"] = "medium";
      Sizes2["Large"] = "large";
  })(Sizes2 || (Sizes2 = {}));
 */
