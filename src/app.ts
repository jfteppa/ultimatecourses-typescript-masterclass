class Foo {
  bar() {}
}

/**
 * that foo class will be compiled into (custom objects in js)
 * function Foo() {}
 * Foo.prototype.bar = function () { };
 */

const bar = new Foo();

/**
 * test the prototype property of a construtor
 * exists somewhere in another object
 */
console.log(Object.getPrototypeOf(bar) === Foo.prototype);
console.log(bar instanceof Foo);

// type guard

class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

function getItemName(item: Song | Playlist) {
  // typeof item = 'object'
  console.log(typeof item);

  // handle item as song
  if ((item as Song).title) {
    //handle item as song
    return (item as Song).title;
  }
  // handle item as playlist
  return (item as Playlist).name;
}

function getItemName2(item: Song | Playlist) {
  // Type Guard
  if (item instanceof Song) {
    return item.title;
  }
  // Type Guard
  return item.name;
}

const songName = getItemName(new Song('Wonderful song', 30000));
console.log('songName', songName);

const playListName = getItemName(
  new Playlist('Wonderful Playlist', [new Song('The Man', 30000)])
);
console.log('playListName', playListName);

const songName2 = getItemName2(new Song('Wonderful song', 30000));
console.log('songName', songName2);

const playListName2 = getItemName2(
  new Playlist('Wonderful Playlist', [new Song('The Man', 30000)])
);
console.log('playListName', playListName2);
