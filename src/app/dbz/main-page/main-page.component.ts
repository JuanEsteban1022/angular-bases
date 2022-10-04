import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Picolo',
      poder: 5000,
    },
    {
      nombre: 'yamcha',
      poder: 100,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Ms. Roshi',
    poder: 1000,
  };

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }
}
