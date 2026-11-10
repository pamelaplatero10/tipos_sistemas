
// Es el intermediario entre Angular y Firebase.
import { Injectable, signal } from '@angular/core';

// Importamos las funciones necesarias para conectar con Firebase.
import { initializeApp } from 'firebase/app';

// Importamos las operaciones de Realtime Database.
import {
  getDatabase, // Obtiene la conexión con Realtime Database.
  ref,         // Hace referencia a una ubicación de la base de datos.
  push,        // Genera un identificador único.
  set,         // Guarda los datos.
  get,         // Obtiene los datos de un registro.
  onValue,     // Escucha los cambios en tiempo real.
  update,      // Actualiza los datos.
  remove       // Elimina un registro.
} from 'firebase/database';

// Importamos el modelo TipoSistema.
import { type TipoSistema } from './tipo-sistema.model';

// Configuración del proyecto Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyCNhrVPHqlpjouSihZwuHi49PNHpY1k7ME',
  authDomain: 'tipos-sistemas.firebaseapp.com',
  projectId: 'tipos-sistemas',
  storageBucket: 'tipos-sistemas.firebasestorage.app',
  messagingSenderId: '371306933593',
  appId: '1:371306933593:web:e03a5dae4a44120a633048',

  // Dirección nueva Realtime Database.
  databaseURL: 'https://tipos-sistemas-default-rtdb.firebaseio.com/'
};

// Iniciamos la conexión con Firebase.
const app = initializeApp(firebaseConfig);

// Obtenemos la conexión con Realtime Database.
const db = getDatabase(app);

// Permitimos que Angular utilice esta clase como servicio.
@Injectable({
  providedIn: 'root'
})
export class TipoSistemaService {

  // Señal privada que almacena los tipos de sistemas.
  private _tiposSistemas = signal<TipoSistema[]>([]);

  // Permitimos consultar la lista sin modificar directamente la señal.
  tiposSistemas = this._tiposSistemas.asReadonly();

  // El constructor inicia la consulta de los registros.
  constructor() {
    this.listarTiposSistemas();
  }

  // LISTAR TIPOS DE SISTEMAS
  listarTiposSistemas() {

    // Referencia a la ubicación donde guardaremos los registros.
    const referencia = ref(db, 'tipos_sistemas');

    // Escuchamos los cambios en tiempo real.
    onValue(referencia, (snapshot) => {

      const tipos: TipoSistema[] = [];

      // Obtenemos todos los datos guardados.
      const datos = snapshot.val();

      // Comprobamos que existan registros.
      if (datos) {

        // Recorremos los identificadores de los registros.
        Object.keys(datos).forEach((id) => {

          // Agregamos cada registro al arreglo.
          tipos.push({
            id: id,
            ...datos[id]
          } as TipoSistema);

        });
      }

      // Actualizamos la señal con los registros obtenidos.
      this._tiposSistemas.set(tipos);
    });
  }

  // INSERTAR UN TIPO DE SISTEMA
  insertarTipoSistema(tipo: Omit<TipoSistema, 'id'>) {

    // Generamos un identificador único para el nuevo registro.
    const referencia = push(ref(db, 'tipos_sistemas'));

    // Guardamos los datos en Firebase.
    return set(referencia, tipo);
  }

  // OBTENER UN TIPO DE SISTEMA POR SU ID
  obtenerTipoSistema(id: string) {

    // Buscamos el registro mediante su identificador.
    return get(ref(db, `tipos_sistemas/${id}`));
  }

  // ACTUALIZAR UN TIPO DE SISTEMA
  actualizarTipoSistema(id: string, tipo: Omit<TipoSistema, 'id'>) {

    // Identificamos el registro y actualizamos sus campos.
    return update(ref(db, `tipos_sistemas/${id}`), tipo);
  }

  // ELIMINAR UN TIPO DE SISTEMA
  eliminarTipoSistema(id: string) {

    // Identificamos y eliminamos el registro.
    return remove(ref(db, `tipos_sistemas/${id}`));
  }
}
