enum Sizes {
  Small,
  Medium,
  Large,
}

// compiled into
/**
  var Sizes;
  (function (Sizes) {
      Sizes[Sizes["Small"] = 0] = "Small";
      Sizes[Sizes["Medium"] = 1] = "Medium";
      Sizes[Sizes["Large"] = 2] = "Large";
  })(Sizes || (Sizes = {}));
 */

console.log(Sizes.Large); // => 1
console.log(Sizes[Sizes.Large]); // => Large

/**
 * we can stack/extend enums together
 */
enum Sizes {
  ExtraLarge = 3,
}

// compiled into
/**
   (function (Sizes) {
      Sizes[Sizes["ExtraLarge"] = 3] = "ExtraLarge";
  })(Sizes || (Sizes = {}));
 */

const selectedSize = 2;
console.log(Sizes[selectedSize]); // => Large
