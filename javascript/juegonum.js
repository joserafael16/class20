// Función para iniciar el juego
function iniciarJuego() {
  alert("¡Hola amigo reta tu poder adivinatorio y juega al numero adivinatorio!");
  alert(`Tienes ${intentosRestantes} intentos para adivinar un número entre 1 y 100.`);
  comprobarIntento();
}
// Crear un número aleatorio que iria entre 1 y 100
let numeroPC = Math.floor(Math.random() * 100) + 1;

// para asignar el numero de intentos en el juego 
let intentosRestantes = 6;


// Función para procesar el intento del usuario
function comprobarIntento() {
  // Obtener el número ingresado por el usuario
  let jugador = parseInt(prompt("Ingresa un número entre 1 y 100:"));

  // Decrementar el contador de intentos
  intentosRestantes--;

  // Comprobar si el usuario adivinó el número
  if (jugador === numeroPC) {
    alert(`¡Eres increible, reconozco que tienes superpoderes! El número era ${numeroPC}.`);
    reiniciarJuego();
  } else if (jugador < numeroPC) {
    alert(`El número ingresado (${jugador}) es menor que el número a adivinar.`);
  } else {
    alert(`El número ingresado (${jugador}) es mayor que el número a adivinar.`);
  }

  // Mostrar los intentos restantes
  alert(`Intentos restantes: ${intentosRestantes}`);

  // Si se han agotado los intentos, mostrar el número a adivinar
  if (intentosRestantes === 0) {
    alert(`perdiste, intentalo mas tarde, no te rindas. El número era ${numeroPC}.`);
    reiniciarJuego();
  } else {
    comprobarIntento();
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  numeroPC = Math.floor(Math.random() * 100) + 1;
  intentosRestantes = 6;
}
 //Iniciar el juego
iniciarJuego();