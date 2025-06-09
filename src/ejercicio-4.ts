/* EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus método*/

export class Cuenta {

    private nombre: string;
    private cantidad: number;
    private tipo_cuenta: string;
    private numero_cuenta: string;


    constructor(nuevo_nombre: string, nueva_cantidad: number, tipo_cuenta: string, numero_cuenta: string) {

        this.nombre = nuevo_nombre;

        if (nueva_cantidad < 5) {
            console.warn("La cantidad inicial es menor a $5.00. Se establecerá en $0.00");
            this.cantidad = 0;
        } else {
            this.cantidad = nueva_cantidad;
        }

        this.tipo_cuenta = tipo_cuenta;
        this.numero_cuenta = numero_cuenta;

    }


    depositar(monto: number): void {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else  {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente $${monto}`);
        }
    }


    retirar(valor: number): void {

        if (valor < 5) {
            console.log("El monto a retirar debe ser mayor a $5.00");
        } else if (this.cantidad < valor) {
            console.log("Fondos insuficientes en la cuenta.");
        } else {
            this.cantidad -= valor;
            console.log(`Retiraste $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }


    //metodo para mostrar los valores de los atributos de la cuenta
    atributosCuenta() {
        return `
        Nombre: ${this.nombre}, 
        Tipo de Cuenta: ${this.tipo_cuenta}
        Numero de cuenta: ${this.numero_cuenta}
        Saldo: ${this.cantidad}
        `
    }

}














































