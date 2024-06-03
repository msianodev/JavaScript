// condicional if-else
/*let edad = 15;

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else if (edad < 18 && edad >= 13) {
    console.log('Eres un adolescente');
} else {
    console.log('Eres un niño');
}*/

// condicional while
//imprimir numeros pares

let iteradorWhile = 0;

while (iteradorWhile < 10) {
    if (iteradorWhile % 2 == 0) {
        console.log("Iterando con while los pares del 0 al 10: "+iteradorWhile);
    }
    iteradorWhile++;
}

// condicional do-while

let iteradorDoWhile=0;
do{
    console.log('Hola con Do-While: ' + iteradorDoWhile++);

} while(iteradorDoWhile < 10);

// condicional for

for (let iteradorFor = 0; iteradorFor < 10; iteradorFor++) {
    console.log("iterando con for: "+iteradorFor);
}

// for in
let animales = ['perro', 'gato', 'pez'];

for (let animal in animales) {
    console.log(animal);
}

// for of
for (let animal of animales) {
    console.log(animal);
}