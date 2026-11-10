 //interface permite definir la estructura que deben tener los objetos.

export interface TipoSistema {
  id: string;                     // Identificador único del documento de realtime database.
  nombre: string;                 // Nombre del tipo de sistema.
  descripcion: string;            // Descripción del tipo de sistema.
  categoria: string;              // Categoría a la que pertenece el tipo de sistema.
  estado: string;                 // Estado actual del tipo de sistema.
}
