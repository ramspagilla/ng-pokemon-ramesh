import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
    selector: 'app-trainer',
    templateUrl: './trainer.page.html',
    styleUrls: ['./trainer.page.css']

})
export class TrainerPage implements OnInit {
    constructor(private readonly localStorageService: LocalStorageService) { }

    ngOnInit(): void {
    }

    get trainerName(): string {
        return this.localStorageService.getTrainerName();
    }

    get trainerPokemons(): Pokemon[] {
        return this.localStorageService.getSelectedPokemons();
    }
}