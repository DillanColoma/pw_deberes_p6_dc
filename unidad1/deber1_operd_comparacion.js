//1.Operador estrictamente igual
let num = 5;
let str = "5";

console.log(num === str);
//2.operador  igual
let num2= 5;
let str2 = "5";

console.log(num ==str);

let edad = 20;

//3.No es igual
if (edad!== 30) {
    console.log("No eres 30 años.");
} else {
    console.log("Eres 30 años.");
}
//4.desigualdad estrica
let numero = 10;
let cadena = "diez";

if (numero!== cadena) {
    console.log("Los valores no son iguales ni del mismo tipo.");
} else {
    console.log("Los valores son iguales o del mismo tipo.");
}
//5.Mayor que
let cadena1 = "Hola";
let cadena2 = "Mundo";

if (cadena1> cadena2) {
    console.log("Las cadenas son diferentes.");
} else {
    console.log("Las cadenas son iguales.");
}
//6.Mayor igual
let cadena3 = "Hola";
let cadena4 = "Mundo";

if (cadena3>= cadena4) {
    console.log("Las cadenas son diferentes.");
} else {
    console.log("Las cadenas son iguales.");
}
//7.Menor igual;
let contador = 0;

// Uso del operador de menor o igual en una estructura condicional if
if (contador <= 5) {
    console.log("Contador es menor o igual a 5.");
} else {
    console.log("Contador es mayor a 5.");
}

//8.Menor
// Incrementar el contador
contador++;

// Uso del operador de menor en un bucle while
while (contador < 10) {
    console.log("Valor actual del contador: " + contador);
    contador++;
}

console.log("Fin del programa.");
