import { Component, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";
import { Pokemon } from "../../models/pokemon.model"


@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.component.html',
    styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {
    constructor(private readonly pokemonService: PokemonService) {

    }
    get pokemon(): Pokemon[] {
        return this.pokemonService.pokemon
    }
    ngOnInit(): void {
        this.pokemonService.fetchPokemon()

    }
}