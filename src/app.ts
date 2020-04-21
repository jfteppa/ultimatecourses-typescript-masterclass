const exists = 'localStorage' in window;
console.log('localStorage in window: ', exists);
// it checks if the object has a property
// it does not matter if the property value is false or null
const win = {
  f: false,
  n: null,
};
console.log('f' in win);
console.log('n' in win);

class Song {
  // literal type
  // type 'song'
  // (property) Song.kind: "song"
  kind: 'song';

  // type 'string'
  // (property) Song.kind2: string
  kind2 = 'song';

  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: 'playlist';
  kind2 = 'playlist';
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return item instanceof Song;
}

function isSong2(item: any): item is Song {
  return 'title' in item;
}

function getItemName(item: Song | Playlist) {
  if (item.kind2 === 'song') {
    // (parameter) item: Song | Playlist
    // return item.title; // error
  }
  if (item.kind === 'song') {
    // (parameter) item: Song
    return item.title;
  }
  if (isSong2(item)) {
    return item.title;
  }
  if (isSong(item)) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Wonderful song', 30000));
console.log('songName', songName);

const playListName = getItemName(
  new Playlist('Wonderful Playlist', [new Song('The Man', 30000)])
);
console.log('playListName', playListName);
