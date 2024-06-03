/*
    tipos de variables primitivas
*/
let numero = 10; // variable tipo number
let nombre = 'Matias'; // variable tipo string
let verdadero = true; // variable tipo boolean
let undef; // variable tipo undefined
let nulo = null; // variable tipo null
let arregloAnimales = []; // variable tipo array vacio
let arregloAnimalesMascotas = ['perro', 'gato', 'pez']; // variable tipo array con elementos

function sumar(a, b) { // funcion que suma dos numeros
    return a + b; 
}

function saludar() { // funcion que saluda
    console.log('Hola que tal como estas?');
}

const numeroPi = 3.1416; // variable constante

let mascota = {}; // variable tipo objeto

saludar(); // llamar a la funcion saludar
console.log('Hola Mundo'); // imprimir en consola
console.log(typeof mascota); // imprimir el tipo de variable
console.log(arregloAnimalesMascotas[2]); // imprimir un elemento de un arreglo
console.log("La funcion suma, da: "+sumar(5, 3)); // imprimir el resultado de una funcion