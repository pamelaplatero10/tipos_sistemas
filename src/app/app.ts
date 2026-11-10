// Importamos Component para definir el componente principal.
import { Component } from '@angular/core';

// Importamos RouterOutlet para mostrar las páginas según la ruta.
// RouterLink permite navegar entre las diferentes páginas.
import { RouterOutlet, RouterLink } from '@angular/router';

// Configuración del componente principal de la aplicación.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// Clase principal de la aplicación.
export class App {}
