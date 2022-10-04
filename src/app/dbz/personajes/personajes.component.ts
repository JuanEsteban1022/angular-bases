import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // Indicamos que estos objetos vienen del componente padre, y pueden utilizarse en el archivo HTML
  @Input() personajes: any[] = [];
}
