//concatenación de variables de tipo string
var texto1 = "Hello";
var texto2 = "World";
var ambosTextos =  texto1 + texto2;
//El texto de la linea 4 se mostrara sin espacios
var ambosTextos2 = texto1 + " " + texto2;
console.log(ambosTextos2);
//con la concatenacón de del espacio de verá correctamente

//ejemplo con  numeros
var num1 = 2;
var num2 = 6;
var ambosNum = num1 + num2;
console.log(ambosNum);
//en la linea 6 el resultado de la impresión será 8

var ambosNumYambosTextos = num1 + texto1 + num2 + num1;
console.log(ambosNumYambosTextos);ambosNumYambosTextos2
//la impresión de la linea 18 tomara todos los valores como string

var ambosNumYambosTextos2 = texto1 + (num1 + num2) + texto2;
console.log(ambosNumYambosTextos2);
//utilizando parentesis en la concatenación de la linea 21 tomara como valores numericos las variables de ese tipo

var ambosNumYambosTextos3 = texto1 + " " + (num1 + num2) + " " + texto2;
console.log(ambosNumYambosTextos3);
//de esta manera estaría todo concatenado de la manera correcta