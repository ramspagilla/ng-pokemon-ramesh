import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Pokemon } from "../models/pokemon.model";

const url = "https://pokeapi.co/api/v2/pokemon"

@Injectable({
    providedIn: 'root'
})

export class PokemonDetailsService {
    pokemon!: Pokemon

    constructor(private readonly http: HttpClient) {
    }

    public fetchPokemonByName(name: string | null): void {
        const pokemonUrl = url + `/${name}`;
        this.http.get<Pokemon>(pokemonUrl).pipe(
            map((pokemon: Pokemon) => ({
                ...pokemon,
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
            }))
        ).subscribe((pokemon: Pokemon) => {
            this.pokemon = pokemon
        })

    }
}