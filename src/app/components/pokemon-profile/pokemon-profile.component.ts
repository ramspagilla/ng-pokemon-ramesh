import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent implements OnInit {
    showSuccess: boolean = false;

    @Input() pokemon!: Pokemon;

    constructor(private localStorageService: LocalStorageService) { }

    onSelectClicked() {
        this.localStorageService.storeSelectedPokemon(this.pokemon);
        this.showSuccess = true;
    }

    ngOnInit(): void {
    }

}
