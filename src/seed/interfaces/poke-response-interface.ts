export interface BasicPokemon {
  name: string;
  url: string;
}

export interface PokeResponse {
  count: number;
  next: string;
  previous: string;
  results: BasicPokemon[];
}
