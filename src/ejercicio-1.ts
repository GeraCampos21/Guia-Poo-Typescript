/*
EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
*/

type posicion = "centrado" | "derecha" | "izquierda"

export class Cabecera{

    //atributos los iguale a "" para que no marque error, porque me pide un constructor pero el ejercicio no lo pide
    private titulo: string ;
    private titulo_posicion: posicion ;
    private color: string ;
    private fuente: string ;

    constructor(){
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.titulo_posicion = "centrado";
    }

   // Método para establecer título, color y fuente  
    setEstilos(nuevo_titulo: string, nuevo_color: string, nueva_fuente: string): void {

        this.titulo = nuevo_titulo;
        this.color = nuevo_color;
        this.fuente = nueva_fuente;
    }

    // Método para definir la posición del título
    setPosicion(posicion: posicion): void {
        this.titulo_posicion = posicion;
    }

     // Método para mostrar los valores de los atributos de cabecera
    atributosCabecera(): string {
        return `
        Propiedades de la clase Cabecera:

        Titulo: ${this.titulo}, 
        Color: ${this.color}
        Fuente: ${this.fuente}
        Posicionamiento del Titulo: ${this.titulo_posicion}
        `
    }


}
