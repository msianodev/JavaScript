// operadores aritmeticos
let a = 5;
let b = 3;
console.log("a:5 + b:3 = "+a + b); // suma, no suma, concatena. Para sumar es la siguiente funcion:
console.log("a:5 + b:3 = "+(a + b)); // suma
console.log("a:5 - b:3 = "+a - b); // resta, no resta, concatena. Para restar es la siguiente funcion:
console.log("a:5 - b:3 = "+(a - b)); // resta
console.log("a:5 * b:3 = "+a * b); // multiplicacion
console.log("a:5 / b:3 = "+a / b); // division
console.log("a:5 % b:3 = "+a % b); // modulo
console.log("a:5 ** b:3 = "+a ** b); // potencia

//operadores asignacion
let i = 5;
let j = 3;
i += j; // i = i + j incremento i lo que vale j
i -= j; // i = i - j decremento i lo que vale j
i *= j; // i = i * j multiplicacion i por j
i /= j; // i = i / j division i por j
i %= j; // i = i % j modulo i por j
i **= j; // i = i ** j potencia i por j

//operadores de comparacion
let k = 5;
let l = 3;
let m = k == l; // igualdad, se fija solo en el valor de los datos
let n = k != l; // desigualdad
let o = k > l; // mayor que
let p = k < l; // menor que
let q = k >= l; // mayor o igual que
let r = k <= l; // menor o igual que
let s = k === l; // igualdad estricta, se fija en el mismo tipo y valor de los datos
let t = k !== l; // desigualdad estricta

// operadores logicos
let u = true;
let v = false;
let w = u && v; // and
let x = u || v; // or
let y = !u; // not

//operadores bitwise
let z = 5; // 101
let aa = 3; // 011
let ab = z & aa; // 001 and
let ac = z | aa; // 111 or
let ad = z ^ aa; // 110 xor
let ae = ~z; // 010 not
let af = z << 1; // 1010 desplazamiento a la izquierda
let ag = z >> 1; // 10 desplazamiento a la derecha
let ah = z >>> 1; // 10 desplazamiento a la derecha sin signo

//operadores ternarios
//expresion ? 'si es true' : 'si es false'
let ai = 5;
let aj = 3;
let ak = ai > aj ? 'si es mayor' : 'si es menor';
console.log(ak);
