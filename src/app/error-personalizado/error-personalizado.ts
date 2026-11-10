// Importamos Component para crear el componente de Angular.
import { Component } from '@angular/core';

// Importamos RouterLink para permitir regresar a la página de inicio.
import { RouterLink } from '@angular/router';

// Configuración del componente de error personalizado.
@Component({
  selector: 'app-error-personalizado',
  imports: [RouterLink],
  templateUrl: './error-personalizado.html',
  styleUrl: './error-personalizado.css',
})

// Clase que representa la página de error 404.
export class ErrorPersonalizado {

}
