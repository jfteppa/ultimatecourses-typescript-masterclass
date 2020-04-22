interface Artist {
  name: string;
}

class ArtistCreator implements Artist {
  constructor(public name: string) {}
}

function artistFactory({ name }: Artist) {
  return new ArtistCreator(name);
}

// const artist: ArtistCreator
const artist = artistFactory({ name: 'Juan' });

class ArtistCreator2 {
  constructor(public name: string) {}
}

function artistFactory2({ name }: ArtistCreator2) {
  return new ArtistCreator(name);
}

// const artist2: ArtistCreator
const artist2 = artistFactory2({ name: 'Juan Felipe' });

/**
 * if we need to have some instance or implementation we would go with the class
 * if we just need to type check and not implement any methods or instantiate objects
 * then we can just create an interface
 */
