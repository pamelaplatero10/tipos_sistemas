 // Importamos Component, OnInit y ChangeDetectorRef.
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

// Importamos FormsModule para utilizar [(ngModel)].
import { FormsModule } from '@angular/forms';

// Importamos las herramientas para obtener el ID y navegar entre pantallas.
import { ActivatedRoute, Router } from '@angular/router';

// Importamos nuestro servicio.
import { TipoSistemaService } from '../tipo-sistema.service';

@Component({
  selector: 'app-actualiza-tipo',
  imports: [FormsModule],
  templateUrl: './actualiza-tipo.html',
  styleUrl: './actualiza-tipo.css',
})
export class ActualizaTipo implements OnInit {

  // Identificador del registro que vamos a modificar.
  id: string = '';

  // Variables que almacenan los datos del formulario.
  nombre: string = '';
  descripcion: string = '';
  categoria: string = '';
  estado: string = 'Activo';

  // Inyectamos el servicio, la ruta, el navegador y ChangeDetectorRef.
  constructor(
    private tipoSistemaService: TipoSistemaService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  // Buscar el tipo de sistema seleccionado.
  async ngOnInit() {

    // Obtenemos el ID que viene en la dirección de la página.
    this.id = this.route.snapshot.params['id'];

    // Buscamos el registro en Realtime Database.
    const documento = await this.tipoSistemaService.obtenerTipoSistema(this.id);

    // Comprobamos si el registro existe.
    console.log('Documento encontrado:', documento.exists());

    // Obtenemos los datos del registro.
    console.log('Datos del documento:', documento.val());

    if (documento.exists()) {

      // Guardamos los datos obtenidos en una variable.
      const tipo = documento.val();

      // Asignamos los datos a las variables del formulario.
      this.nombre = tipo['nombre'];
      this.descripcion = tipo['descripcion'];
      this.categoria = tipo['categoria'];
      this.estado = tipo['estado'];

      // Actualizamos la vista para mostrar los datos.
      this.cdr.detectChanges();

      console.log('Nombre asignado:', this.nombre);
      console.log('Descripción asignada:', this.descripcion);
      console.log('Categoría asignada:', this.categoria);
      console.log('Estado asignado:', this.estado);

    } else {

      // Si no existe el registro, mostramos un mensaje.
      alert('No se encontró el tipo de sistema.');

      // Regresamos a la pantalla de consulta.
      this.router.navigate(['/tipos']);
    }
  }

  // Actualizar un tipo de sistema.
  actualizarTipoSistema() {

    // Creamos un objeto con los datos modificados.
    const tipo = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      categoria: this.categoria,
      estado: this.estado
    };

    // Enviamos los cambios al servicio.
    this.tipoSistemaService.actualizarTipoSistema(this.id, tipo);

    alert('Tipo de sistema actualizado correctamente.');

    // Regresamos a la pantalla de consulta.
    this.router.navigate(['/tipos']);
  }

}
