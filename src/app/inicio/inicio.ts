// Importamos Component para definir este componente de Angular.
import { Component } from '@angular/core';

// Importamos RouterLink para permitir la navegación mediante enlaces.
import { RouterLink } from '@angular/router';

// Configuración del componente de inicio.
@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})

// Clase que representa la pantalla principal del proyecto.
export class Inicio {

}
