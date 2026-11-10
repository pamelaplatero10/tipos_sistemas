// Este componente controla los datos que escribe el usuario
// y decide qué hacer cuando presiona el botón para registrar.

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoSistemaService } from '../tipo-sistema.service';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-registro-tipo',
  templateUrl: './registro-tipo.html',
  styleUrl: './registro-tipo.css',
})
export class RegistroTipo {

  // Almacenan los datos que escribe el usuario.
  nombre: string = '';
  descripcion: string = '';
  categoria: string = '';
  estado: string = 'Activo';

  // Recibimos el servicio de Firebase y el sistema de navegación.
  constructor(
    private tipoSistemaService: TipoSistemaService,
    private router: Router
  ) {}

  // Insertar un tipo de sistema.
  async insertarTipoSistema() {

    // Creamos un objeto con los datos del formulario.
    const tipo = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      categoria: this.categoria,
      estado: this.estado
    };

    try {

      // Guardamos el nuevo registro en Realtime Database.
      await this.tipoSistemaService.insertarTipoSistema(tipo);

      // Limpiamos el formulario después de guardar.
      this.limpiarFormulario();

      // Navegamos a la pantalla de consulta.
      this.router.navigate(['/tipos']);

    } catch (error) {

      // Mostramos un mensaje si ocurre un problema al guardar.
      alert('No se pudo registrar el tipo de sistema.');

      console.error('Error al registrar:', error);
    }
  }

  // Limpiar el formulario y restablecer los valores iniciales.
  limpiarFormulario() {
    this.nombre = '';
    this.descripcion = '';
    this.categoria = '';
    this.estado = 'Activo';
  }

}
