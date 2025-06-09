import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Cabecera } from './ejercicio-1.ts'
import { Calculadora } from './ejercicio-2.ts'
import { Cancion } from './ejercicio-3.ts'
import { Cuenta } from './ejercicio-4.ts'
import { Empleado } from './empleado-5.ts'


//DATOS DEL EJECICIO 1
console.log("DATOS EJERCICIO 1")
const cabecera = new Cabecera();
cabecera.setEstilos("Lading Page", "Blanco", "Arial");
cabecera.setPosicion("izquierda");
console.log(cabecera.atributosCabecera())


//DATOS DEL EJERCICIO 2
console.log("DATOS EJERCICIO 2")
const calculos = new Calculadora();
console.log(
  `
    Calculadora:

    Suma:               ${calculos.sumar(7, 25)}
    Resta:              ${calculos.restar(1000, 7)}
    Multiplicación:     ${calculos.multiplicar(20, 10)}
    División:           ${calculos.dividir(30, 3)}
    Potencia:           ${calculos.potencia(5, 3)}
    Factorial:          ${calculos.factorial(7)}

`)


//DATOS DEL EJECICIO 3
console.log("DATOS EJERCICIO 3")
const cancion = new Cancion("Natual", "Rock");
cancion.setAutor("Imagine Dragons");
console.log(`${cancion.atributosCancion()}Autor: ${cancion.getAutor()}

`);





//DATOS DEL EJERCICIO 4
console.log("DATOS EJERCICIO 4")
const cuenta = new Cuenta("Gerardo", 1000, "Ahorro", "g8a5c4c62");
console.log(cuenta.atributosCuenta());
cuenta.depositar(10);
cuenta.retirar(500);
console.log(cuenta.atributosCuenta());


//DATOS EJERCICIO 5
console.log("DATOS EJERCICIO 5")
const empleado1 = new Empleado("Pedro", "López", "San Salvador", 12345678, 25);
empleado1.cargarSueldo(1000);
console.log(
  `     ${empleado1.mostrarDatosPersonales()} 
        ${empleado1.imprimirSueldo()}
  `
);
console.log(empleado1.verificarEdad());

























document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
