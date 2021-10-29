// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = []
  for (var i in objeto) {
   var arraytemp = []
    arraytemp.push(i);
    arraytemp.push( objeto[i]);
   array.push(arraytemp)
  }
return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    
  if (obj.hasOwnProperty(string[i])){
      obj[string[i]] =  obj[string[i]] + 1
  } 
  else 
  obj[string[i]] = 1
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var palabra = s

  var array2 = []
  
  for(var i=0 ; i < palabra.length; i++){
  if(palabra[i] === palabra[i].toUpperCase()) array2.push(palabra[i])
  }
  for(var i=0 ; i < palabra.length; i++){
  if(palabra[i] === palabra[i].toLowerCase()) array2.push(palabra[i])
  }
  palabra=array2.join('')
  return palabra
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = str
  var mirror =''
  var mirror2 =[]
  var divisiones = palabra.split(" ");
  
  for (var i = 0; i < divisiones.length; i++) {
       mirror = divisiones[i]
       mirror2[i] = mirror.split('').reverse().join('')
      mirror=''
  }
  mirror = mirror2.join(' ')
  
  return mirror

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var numst = String(numero)
  for (var i = 0; i < numst.length; i++) {
      if(numst[i]===numst[numst.length-(i+1)]);
      else return('No es capicua')
  }
  return 'Es capicua'


}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var aux = ''
  for (var i = 0; i < cadena.length; i++) {
      if(cadena[i]==='a'||cadena[i]==='b'||cadena[i]==='c');
       else aux = aux + cadena[i].substr()
        
      }
  
  return aux


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b){
   
    return a.length - b.length;
  });
  return arr

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var result = arreglo1.filter(function(e) {
    return arreglo2.indexOf(e) != -1
});
return result
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

