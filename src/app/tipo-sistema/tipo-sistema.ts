//Lógica para acceder a los registros y eliminarlos
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TipoSistemaService } from '../tipo-sistema.service';

@Component({
  selector: 'app-tipo-sistema',
  imports: [RouterLink],
  templateUrl: './tipo-sistema.html',
  styleUrl: './tipo-sistema.css',
})
export class TipoSistema {

  // Recibimos el servicio que contiene las operaciones de Firebase.
  constructor(public tipoSistemaService: TipoSistemaService) {}

  // Eliminar un tipo de sistema.
  async eliminarTipoSistema(id: string) {

    // Preguntamos si el usuario desea eliminar el registro.
    if (confirm('¿Deseas eliminar este tipo de sistema?')) {

      try {

        // Esperamos a que Firebase elimine el registro.
        await this.tipoSistemaService.eliminarTipoSistema(id);

      } catch (error) {

        // Mostramos un mensaje si ocurre algún problema.
        alert('No se pudo eliminar el tipo de sistema.');

        console.error('Error al eliminar:', error);
      }
    }
  }
}

