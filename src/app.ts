class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

/**
 *
 * User Defined Type Guard
 *
 * always return a boolean
 * but it will supply further type information
 * it is a reusable function
 *
 */
function isSong(item: any): item is Song {
  return item instanceof Song;
}

function getItemName(item: Song | Playlist) {
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
