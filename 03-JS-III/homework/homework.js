// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  var suma = 0;
  for (var i = 0; i <= 10; i++) {
    suma += i;
  }
  return suma
}

function encuentraPares(array) {
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  newArray = [];
  for (var i = 0; i <= array.length; i++) {
    var verificar = array[i] % 2;
    if (verificar === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  /*
  newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i]**2);
  }
  return newArray;
  */
  return array.map(function (valor) {
    return valor ** 2
  })
}

function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  /* var suma = 0;
  for (var i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma; */
  return array.reduce(function(suma,valor){
    return suma + valor
  })
}

function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var cont = 1;
  var cant = 10;
  while (cant <= num) {
    cont += 1;
    cant *= 10;

  }
  return cont;
}

/*
function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var cont = 1;
  while (num >= 10){
    cont += 1;
    num = Math.floor(num/10);    
  }
  return cont;  
}
*/


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos
};
