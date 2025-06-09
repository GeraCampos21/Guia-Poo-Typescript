import { Persona } from "./ejercicio-5";

export class Empleado extends Persona {

    //atributos
    private sueldo: number = 0;

    //constructor para recibir los datos
    constructor(nuevo_nombre: string, nuevo_apellido: string, nueva_direccion: string, nuevo_telefono: number, nueva_edad: number) {

        super(nuevo_nombre, nuevo_apellido, nueva_direccion, nuevo_telefono, nueva_edad)
    }

    //metodo para asignar un sueldo al empleado
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    //metodo para imprimir el sueldo
    imprimirSueldo(): string {
        return `El sueldo es: $${this.sueldo}`;
    }

    mostrarDatosPersonales(): string{
        return `
        Datos del empleado y sueldo:

        Nombre: ${this.nombre}, 
        Apellido: ${this.apellido}
        Dirección: ${this.direccion}
        Telefono: ${this.telefono}, 
        Edad: ${this.edad}
        `
    }

}

