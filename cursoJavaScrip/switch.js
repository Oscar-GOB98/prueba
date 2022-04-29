var user;
var cpu;

function resultadoGanador() {
    switch (true) {
        case user === cpu :
            console.log("Empate")
        break;
        case user === "tijeras" && cpu === "papel" :
            console.log("Ganaste")
        break;
        case user === "piedra" && cpu === "tijeras" :
            console.log("Ganaste")
        break;
        case user === "papel" && cpu === "piedra" :
            console.log("Ganaste")
        break;
        default: 
            console.log("Perdiste")
    }
}