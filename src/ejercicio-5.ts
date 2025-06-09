/*EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.*/

export abstract class Persona   {
    //atributos
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: number;
    protected edad: number;

    //constructor para recibir los datos
    constructor(nuevo_nombre: string, nuevo_apellido: string, nueva_direccion: string, nuevo_telefono: number, nueva_edad: number) {

        this.nombre = nuevo_nombre;
        this.apellido = nuevo_apellido;
        this.direccion = nueva_direccion;
        this.telefono = nuevo_telefono;
        this.edad = nueva_edad;

    }

    //metodo para imprimir la edad

    verificarEdad(): string {
        if (this.edad > 17) {
            return `Es mayor de Edad, Edad: ${this.edad}`
        } else {
            return `Es menor de Edad, Edad: ${this.edad}`
        }

    }

    abstract mostrarDatosPersonales(): string;

}
