/*
EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción. 

*/

export class Cancion {

    //atributos
    private  titulo: string;
    private genero: string;
    private autor: string ;


    constructor (nueva_cancion: string, nuevo_genero:string){

        this.titulo = nueva_cancion;
        this.genero = nuevo_genero;
        this.autor="";
    }

    //metodo para recibir al autor
    setAutor(nuevo_autor:string): void {
        this.autor = nuevo_autor;
    }

    //metodo para imprimir el autor
    getAutor(): string {
        
     return this.autor;
    }

    //metodo para mostrar los valores de los atributos de la cancion
    atributosCancion() {
        return `
        Datos de la Cancion:
        Titulo: ${this.titulo} 
        Genero: ${this.genero}
        `
    }


}