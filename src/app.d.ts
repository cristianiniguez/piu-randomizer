type Song = {
  name: string;
  artist: string;
  bpm: number | number[];
  type: string;
  tags: string[];
}

type Step = Song & {
  stepType: string
  stepLevel: number
}

type RandomSongParams = {
  gameEdition: string;
  stepTypes: string[];
  songTypes: string[];
  minLevel: number;
  maxLevel: number;
};
