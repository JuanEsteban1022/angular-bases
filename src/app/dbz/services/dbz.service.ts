import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

// Me indica que esta clase puede ser inyectada
@Injectable()
export class DbzService {
  // Es privado para impedir que el arreglo sea manipulado
  private _personajes: Personaje[] = [
    {
      nombre: 'Picolo',
      poder: 5000,
    },
    {
      nombre: 'yamcha',
      poder: 100,
    },
  ];

  get personajes(): Personaje[] {
    // Las llaves indican que es un arreglo y los puntos separa los elementos independientes
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
