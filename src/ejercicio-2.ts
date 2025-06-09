
/*
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
*/


export class Calculadora {
    // Suma dos números
    sumar(num_1: number, num_2: number): number {
        return num_1 + num_2;
    }

    // Resta dos números
    restar(num_1: number, num_2: number): number {
        return num_1 - num_2;
    }

    // Multiplica dos números
    multiplicar(num_1: number, num_2: number): number {
        return num_1 * num_2;
    }

    // Divide dos números
    dividir(num_1: number, num_2: number): number | string{
        if (num_2 === 0) {
             throw new Error("No se puede dividir entre cero, cambie el valor.");
        }
        return num_1 / num_2;
    }

    // Eleva un número a una potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Calcula el factorial de un número 
    factorial(num: number): number {
        
        if (num < 0) {
            throw new Error("Ingresar solo numeros positivos.");
        }else if (num === 0 || num === 1) {
            return 1;
        }

        let resultado = 1;
        for (let i = 2; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
