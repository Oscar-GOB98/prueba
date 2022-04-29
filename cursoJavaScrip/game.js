
    var user;
    var ia;


    function game(){
        if((user == "tijeras" && ia == "papel") || (user == "papel" && ia == "piedra") || (user == "piedra" && ia == "tijeras")){
            console.log("Felicidades, ganaste");
        }else if((user == "papel" && ia == "papel") || (user == "piedra" && ia == "piedra") || (user == "tijeras" && ia == "tijeras")){
            console.log("Empate");
        }else{
            console.log("perdiste");
        }
    }
