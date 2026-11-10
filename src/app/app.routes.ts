// Importamos Routes para configurar las rutas de la aplicación.
import { Routes } from '@angular/router';

// Importamos los componentes que se mostrarán en cada ruta.
import { Inicio } from './inicio/inicio';
import { TipoSistema } from './tipo-sistema/tipo-sistema';
import { RegistroTipo } from './registro-tipo/registro-tipo';
import { ActualizaTipo } from './actualiza-tipo/actualiza-tipo';
import { ErrorPersonalizado } from './error-personalizado/error-personalizado';

// Lista de rutas disponibles en el sistema.
export const routes: Routes = [

  // Pantalla principal.
  { path: '', component: Inicio },

  // Pantalla para registrar un tipo de sistema.
  { path: 'registro', component: RegistroTipo },

  // Pantalla para consultar los tipos de sistemas.
  { path: 'tipos', component: TipoSistema },

  // Pantalla para actualizar un sistema según su identificador.
  { path: 'actualiza/:id', component: ActualizaTipo },

  // Si la dirección no coincide con ninguna ruta, muestra el error 404.
  { path: '**', component: ErrorPersonalizado }

];
