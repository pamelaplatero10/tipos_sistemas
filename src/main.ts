// Importamos la función que inicia una aplicación Angular.
import { bootstrapApplication } from '@angular/platform-browser';

// Importamos la configuración general de la aplicación.
import { appConfig } from './app/app.config';

// Importamos el componente principal.
import { App } from './app/app';

// Iniciamos la aplicación utilizando el componente principal y su configuración.
bootstrapApplication(App, appConfig)

  // Si ocurre un error durante el inicio, se muestra en la consola.
  .catch((err) => console.error(err));
