import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']

})
export class LoginComponent{
    constructor(){}
    loginForm:FormGroup=new FormGroup({
        trainerName:new FormControl("",[
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
        ])
    });
    get trainerName():AbstractControl{
        return this.trainerName
    }
  
}