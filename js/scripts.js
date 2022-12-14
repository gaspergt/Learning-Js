//<<-------- OPERADORES ARITMERICOS -------->>

//declaración de variables de tipo numerico
let a = 25;
let b = 5;

//suma de dos variables
let c = a + b;
console.log("Resultado de la suma: " + c);

//resta de dos variables
let d = a - b;
console.log("Resultado de la resta: " + d);

//multiplicación de dos variables
let e = a * b;
console.log("Resultado de la multiplicación: " + e);

//división de dos variables
let f = a / b;
console.log("Resultado de la división: " + f);

//modulo o residuo de división de dos variables
let g = a % b;
console.log("Resultado del modulo es: " + g);

//operador de potencias
let h =a ** b;
console.log("La potencia es: " + h);


/* OPERADORES DE INCREMENTO Y DECREMENTO

    1. pre-incremento (el operador "++" antes de la variable) el valor 25 de "a", pasa a ser 26 automaticamente
    2. post-incremento (Primero se utiliza la variable y luego "++") el valor de 5 de "b" se asigna a "j", en la impresión de "j" se agrega el incremento pendiente

    */
//incremento
//pre-incremento
let i = ++ a;
console.log(i);

//post-decremento
let j = b ++;
console.log(b);
console.log(j);

//decremento
//pre-decremento
let k = -- a;
console.log(a);
console.log(k);

//post-decremento 
let l = b --;
console.log(b);
console.log(l);