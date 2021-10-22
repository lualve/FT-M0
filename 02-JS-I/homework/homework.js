// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'loQueQuieras';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 555;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:

return str

}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return (x + y)
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return (x - y)
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return (x * y)
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor ( 11 ejercicios) 
  // Tu código:
  return (x / y)
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales (12 ejercicios)
  // De lo contrario, devuelve "false"
  // Tu código:
if (x === y){
  return true;
}else{return false;}


}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud  (13 ejercicios)
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length){
    return true;
  }else{return false;}
  
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa   (14 ejercicios)
  // De lo contrario, devuelve "false"
  // Tu código:
if (num < 90){
  return true;
}else {return false;}

}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta  (15 ejercicios)
  // De lo contrario, devuelve "false"
  // Tu código:
if (num > 50){
  return true;
}else {return false;}

}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"     (16 ejercicios)
  // Tu código:
  var total = 0;
  total = x % y;

 return total  
}

function esPar(num) {
  // Devuelve "true" si "num" es par       (17 ejercicios)
  // De lo contrario, devuelve "false"
  // Tu código:
if((num % 2) === 0){
  return true;
}else {return false;}

}

function esImpar(num) {
  // Devuelve "true" si "num" es impar      (18 ejercicios)
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num % 3)===1){
    return true;
  }else{return false;}

}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado   (19 ejercicios)
  // ojo: No es raiz cuadrada!
  // Tu código:
  var resultado = 0;
  resultado = num **2;
  return resultado
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo     (20 ejercicios)
  // Tu código:
  resultado = Math.pow(num, 3);
  return resultado
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"  (21 ejercicios)
  // Tu código:
  resultado = Math.pow(num, exponent);
  return resultado
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo    (22 ejercicios)
  // Tu código:
  resultado = Math.round(num)
  return resultado
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo     (23 ejercicios)
  // Tu código:
  resultado = Math.ceil(num);
  return resultado


}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo       (24 ejercicios)
  //Pista: investigá qué hace el método Math.random()
  resultado = Math.random();
  return resultado
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"        (25 ejercicios)
  //Si el número es 0, devuelve false
  if(numero != 0){
    if(numero > 0){
    return 'Es positivo'}
    if(numero < 0){
    return 'Es negativo'}

  }
  return false
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string     (26)
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var resp = '';
  resp = str + '!'
  return resp
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.      (27)
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
var resp = '';
resp = nombre + ' ' + apellido;
return resp
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:     (28)
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = 'Hola'+ ' ' + nombre +'!';
return saludo
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho     (29)
  // Tu código:
  var resp = 0;
  resp = (alto * ancho);
  return resp
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.      (30)
  //Escribe tu código aquí
  var resp = 0;
  resp = lado * 4;
  return resp
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.        (31)
  //Escribe tu código aquí
var area = 0;
area = (base * altura)/2
return area
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba    (32)
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
var cambio = 0; 
cambio = euro * 1.20;
return cambio

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
if(letra.length > 1){return "Dato incorrecto"}

  if((letra === 'a')||(letra === 'e')||(letra === 'i')||(letra === 'o')||(letra === 'u')){
    return "Es vocal"
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
