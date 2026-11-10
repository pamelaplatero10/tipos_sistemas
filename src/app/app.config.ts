// Importamos la configuración de la aplicación y el manejo de errores.
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// Importamos el proveedor de rutas.
import { provideRouter } from '@angular/router';

// Importamos las rutas definidas para el sistema.
import { routes } from './app.routes';

// Configuración general de la aplicación.
export const appConfig: ApplicationConfig = {
  providers: [

    // Permite escuchar errores globales del navegador.
    provideBrowserGlobalErrorListeners(),

    // Habilita la navegación entre las diferentes rutas.
    provideRouter(routes)

  ]
};
