import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response-interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    try {
      await this.pokemonModel.deleteMany({});

      const data = await this.http.get<PokeResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=150',
      );

      const pokemonsToInsert: CreatePokemonDto[] = [];

      data.results.forEach(async (pokemon) => {
        const { name, url } = pokemon;

        const segments = url.split('/');
        const no = +segments[segments.length - 2];

        const createPokemonDto = {
          name,
          no,
        };

        pokemonsToInsert.push(createPokemonDto);
      });

      await this.pokemonModel.insertMany(pokemonsToInsert);

      return 'Seed executed successfully';
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong when populating the DB',
      );
    }
  }
}
