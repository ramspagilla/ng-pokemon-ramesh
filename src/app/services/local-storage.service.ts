import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Pokemon } from '../models/pokemon.model';

const TRAINERNAME_KEY: string = "trainer-name";
const TRAINERPOKEMONS_KEY: string = "trainer-pokemons";


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    public storeTrainerName(trainerName: string): void {
        this.storage.set(TRAINERNAME_KEY, trainerName);
    }

    public getTrainerName(): string {
        return this.storage.get(TRAINERNAME_KEY);
    }

    public storeSelectedPokemon(selectedPokemon: Pokemon): void {
        const currentPokemonList = this.getSelectedPokemons();
        currentPokemonList.push({
            name: selectedPokemon.name,
            url: selectedPokemon.url,
            imageUrl: selectedPokemon.imageUrl
        });
        this.storage.set(TRAINERPOKEMONS_KEY, currentPokemonList);
    }

    public getSelectedPokemons(): Pokemon[] {
        return this.storage.get(TRAINERPOKEMONS_KEY) || [];
    }

    public isTrainerLoggedIn(): boolean {
        return this.storage.get(TRAINERNAME_KEY)
    }
}
