let puntaje = 5;
let intento = 1;
let img = document.getElementById("imgPoke");
let btns= document.getElementById("btns");



const play=(val)=> {

    if(intento>=4){
        img.src = "../img/excandrilObsc.png";
        
        resetGame();
    }


    if (val && intento <= 3) {
        console.log("Ganaste el juego");
        document.querySelector('.display2').innerText = "Puntaje: " + puntaje + 
        "\nIntentos: " + intento;
        
        let mensaje= document.querySelector(".display0")
        mensaje.innerText= "Ganaste el juego Felicidades";
        mensaje.style.border = "solid";
        mensaje.style.background= "blue"
        mensaje.style.font="Times New Roman";
        img.src = "../img/excandril.png";
    
    } else {
        
        document.querySelector('.display2').innerText = "Puntaje: " + 0 + 
        "\nIntentos: " + intento + 
        "\nPokemon incorrecto, intentalo nuevamente";
        intento = intento + 1
        
    }
    
    puntaje = puntaje - 2;

}

function resetGame(){

    document.querySelector('.display2').innerText = "Puntaje: " + 0 + 
    "\nIntentos: " + 0 +"\nSelecciona el nombre del pokemon correcto";

    puntaje = 5;
    intento = 1;  
    document.querySelector(".display0").innerText= "";
    img.src = "../img/excandrilObsc.png"  
    

    

}