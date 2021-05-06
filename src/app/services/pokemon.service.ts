import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';

const pokeAPI: string = 'https://pokeapi.co/api/v2/pokemon?limit=10'

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    public pokemons: Pokemon[] = []
    public error: string = ""
    constructor(private readonly http: HttpClient) {
    }
    public fetchPokemon(): void {
        this.http.get<Pokemon[]>(pokeAPI)
            .subscribe((pokemons: Pokemon[]) => {
                this.pokemons = pokemons
            }, (error: HttpErrorResponse) => {
                this.error = error.message;
            })
    }

    private getIdAndImage(url: string): any {
        const id = url.split('/').filter(Boolean).pop();
        return { id, pokeImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` };
    }
}