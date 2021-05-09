import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDetailsService } from 'src/app/services/pokemon-details.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
    /* constructor(private readonly pokemonService: PokemonService) {
 
     }
     get pokemon(): Pokemon[] {
         return this.pokemonService.pokemon
     }
     ngOnInit(): void {
         this.pokemonService.fetchPokemon()
 
     }*/

    private readonly pokemonName;

    constructor(private readonly route: ActivatedRoute, private readonly pokemonDetailsService: PokemonDetailsService) {
        this.pokemonName = this.route.snapshot.paramMap.get('name')
    }

    ngOnInit(): void {
        this.pokemonDetailsService.fetchPokemonByName(this.pokemonName)
    }

    get pokemon(): Pokemon {
        return this.pokemonDetailsService.pokemon;
    }

}
