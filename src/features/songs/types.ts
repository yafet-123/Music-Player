export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  image: string;
}

export interface SongsState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}
