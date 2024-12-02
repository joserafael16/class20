/* 2) Crea una lista de tareas en donde puedas agregar, eliminar, editar y marcar como completada una tarea
  Debe de tener una interfaz gráfica
 */

const seleccionObjeto = ["piedra", "papel", "tijera"];
        const resultadoPartida = ["victorias", "parejos", "derrotas"];
        let partidasJugadas = 0, victorias = 0, parejos = 0, derrotas = 0;

        function seleccionPC() {
            const opcionRandom = Math.floor(Math.random() * seleccionObjeto.length);
            return seleccionObjeto[opcionRandom];
        }

        function determinarGanador(jugador, pc) {
            if (jugador === pc) return resultadoPartida[1];
            else if (
                (jugador === seleccionObjeto[0] && pc === seleccionObjeto[2]) ||
                (jugador === seleccionObjeto[1] && pc === seleccionObjeto[0]) ||
                (jugador === seleccionObjeto[2] && pc === seleccionObjeto[1])
            ) return resultadoPartida[0];
            else return resultadoPartida[2];
        }

        document.querySelectorAll('.eleccion').forEach(eleccion => {
            eleccion.addEventListener('click', () => {
                const jugador = eleccion.dataset.eleccion;
                const resultadoPC = seleccionPC();
                const resultado = determinarGanador(jugador, resultadoPC);

                document.getElementById('resultado').textContent = 
                    `Elegiste ${jugador}, la computadora eligió ${resultadoPC}. ${
                        resultado === resultadoPartida[0] ? '¡Ganaste!' :
                        resultado === resultadoPartida[1] ? '¡Empate!' : '¡Perdiste!'
                    }`;

                document.getElementById('eleccion-computadora').textContent = 
                    `Elección de la computadora: ${resultadoPC}`;

                partidasJugadas++;
                if (resultado === resultadoPartida[0]) victorias++;
                else if (resultado === resultadoPartida[2]) derrotas++;
                else parejos++;

                document.getElementById('total-partidas').textContent = partidasJugadas;
                document.getElementById('victorias').textContent = victorias;
                document.getElementById('empates').textContent = parejos;
                document.getElementById('derrotas').textContent = derrotas;
            });
        });





// primer juego PiedraPapelTijera


/* Variables
const seleccionObjeto = ["piedra", "papel", "tijera"]; // 0, 1, 2 => 3 elementos en total
const resultadoPartida = ["victorias", "parejos", "derrotas"]; 

// empieza juego
juegoPiedraPapelTijera();

// Funcion para generar una eleccion random del pc
function seleccionPC(){
  const opcionRandom = Math.floor(Math.random() * seleccionObjeto.length); // 0, 1, 2
  return seleccionObjeto[opcionRandom];
}

//const resultadoPC = pc();
//console.log('resultadoPC: ', resultadoPC);

// Funcion para determinar el ganador // 0 = piedra, 1 = papel, 2 = tijera
function determinarGanador(jugador, pc){
  if(jugador === pc){
      return resultadoPartida[1];
  }else if((jugador === seleccionObjeto[0] && pc === seleccionObjeto[2]) || 
  (jugador === seleccionObjeto[1] && pc === seleccionObjeto[0]) || 
  (jugador === seleccionObjeto[2] && pc === seleccionObjeto[1])){
    return resultadoPartida[0];
  }else{
    return resultadoPartida[2];
  }
}

//console.log('determinarGanador: ', determinarGanador(opcion[0], resultadoPC));

// Funcion juego
function juegoPiedraPapelTijera(){
  let partidasJugadas = 0;
  let victorias = 0;
  let parejos = 0;
  let derrotas = 0;

  while(true){
    // Escribe testo
    const seleccionJugador = prompt("escoje entre: piedra, papel o tijera (o escibe 'salir' para terminar el juego)").toLowerCase();

    // Terminar juego
    if(seleccionJugador === "salir"){
      // pantalla creada
      alert(`Resumen:
        partidasJugadas: ${partidasJugadas}
        victorias: ${victorias}
        parejos: ${parejos}
        derrotas: ${derrotas}`);

      break;
    }
    
    // Nombre no valido
    if(seleccionJugador !== seleccionObjeto[0] && seleccionJugador !== seleccionObjeto[1] &&seleccionJugador !== seleccionObjeto[2]){
      alert("Nombre incorrecto");
      continue;
    }

    const resultadoPC = seleccionPC();
    alert("eleccion del pc: " + resultadoPC);

    const resultado = determinarGanador(seleccionJugador, resultadoPC);
    alert(resultado);

    // Actualzar datos
    partidasJugadas++;
    if (resultado === resultadoPartida[0]) {
      victorias++;
    } else if (resultado === resultadoPartida[2]) {
      derrotas++;
    } else {
      parejos++;
    }
  }
}*/