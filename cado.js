// variables
var palabra0=[];
var condicion=true;
var intentos=0;
var aciertos=0;
var arraypalabras=["baloncesto", "futbol", "tenis", "boxeo", "padel"];
// letra aleatoria
var letraAleatoria=Math.floor(Math.random()*(arraypalabras.length));
var adivinar = arraypalabras[letraAleatoria];

console.log(arraypalabras);
console.log(adivinar);


var salirBucle=false;
var acertado=false;

// Ponemos un 0 por cada letra
for (var i = 0; i < adivinar.length; i++) {
	palabra0[i]=0;
}

// Contamos numero de intentos y solo podemos poner letras
while (intentos<5 && aciertos<adivinar.length) {
condicion=true;
  var letrausuario =prompt("Dame una letra de la a-z");

      if (isNaN(letrausuario)) {
        condicion=false;
      } else {
          var letrausuario = prompt("Error, introduce una letra",);
          condicion=true;
        }
      
  var acertado=false;


// // Cambiamos la letra por un numero en la cadena --empieza por 0--
 for (var i = 0; i < adivinar.length; i++) {
    if (adivinar.charAt(i)==letrausuario) {
      palabra0[i]=adivinar.charAt(i);
      acertado=true;
      aciertos++;
      console.log(aciertos);
    }
   }

   // Condicion para saber si fallas o aciertas
   if (acertado==true) {
    alert("Has acertado, letra encontrada");
  } else {
    alert("Has fallado, letra no encontrada");
    intentos++;
  }
  // numero de aciertos es igual q la longitud d la variable adiviar
      if (aciertos==adivinar.length) {
        alert("HAS GANADO");
        salirBucle=true
      }
    acertado=false;
}

  
console.log(palabra0);
























