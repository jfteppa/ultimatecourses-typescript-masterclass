interface Item {
  name: string;
}

interface Artist extends Item {
  songs: number;
}

// we can't extend but we can intersect
type Artist2 = {
  name: string;
} & Item;

// Interface, merge declarations
interface Artist {
  getSongs(): number;
}

// we can't have types with the same name, but we can with interfaces
/* type Artist2 = {
  name: string;
} & Item; */

const newArtist: Artist = {
  name: 'ABC',
  songs: 5,
  getSongs() {
    return this.songs;
  },
};
