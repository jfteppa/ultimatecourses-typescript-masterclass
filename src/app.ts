function foo(bar: string | number) {
  // functions available
  // bar.toString
  // bar.valueOf

  if (typeof bar === 'string') {
    // string; functions available
    // bar.toLowerCase
    // bar.substring
    return bar.toUpperCase();
  }
  // bar.toExponential
  // it needs the return or to have the else block to be able to see the options.
  // outside of the conditional block
  return bar.toFixed(2);
}

class Song {
  // constructor(public title: string, public duration: string | number) {}
  constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
  if (typeof item.duration === 'string') {
    return item.duration;
  }
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;
  return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(
  new Song('Wonderful wonderful', '05:31')
);

console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(
  new Song('Wonderful wonderful', 330000)
);

console.log(songDurationFromMS);

/**
 * the idea of this Type guard is for us to have the functions of the types
 * on TS after the passing 1 conditional
 * in this example the property can be string or number
 * if the property is a string then inside of the logic block it will be a string
 * and we can access all of the string functions
 * if it is not a string then (in this example) it is a number so we have
 * all the functions of a number, with TS there is no need then to make them to be
 * a string or number to have the functions for each type
 */
