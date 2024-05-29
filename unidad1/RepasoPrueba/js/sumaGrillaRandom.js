let variable = 0;

const generarRandom = (val) => {
    let numero = Math.floor(Math.random() * 100);

    switch (val) {
        case 1: document.querySelector('#btn1').innerText = numero;
            break;
        case 2: document.getElementById('btn2').innerText = numero;
            break;
        case 3: document.getElementById('btn3').innerText = numero;
            break;
        case 4: document.getElementById('btn4').innerText = numero;
            break;
        case 5: document.getElementById('btn5').innerText = numero;
            break;
        case 6: document.getElementById('btn6').innerText = numero;
            break;
        case 7: document.getElementById('btn7').innerText = numero;
            break;
        case 8: document.getElementById('btn8').innerText = numero;
            break;
        case 9: document.getElementById('btn9').innerText = numero;
            break;

    }
    variable = numero+variable;
    document.querySelector('.display').innerText= variable;

}

const limpiarPantalla =()=>{
    document.getElementById('btn1').innerText = "";
    document.getElementById('btn2').innerText = "";
    document.getElementById('btn3').innerText = "";
    document.getElementById('btn4').innerText = "";
    document.getElementById('btn5').innerText = "";
    document.getElementById('btn6').innerText = "";
    document.getElementById('btn7').innerText = "";
    document.getElementById('btn8').innerText = "";
    document.getElementById('btn9').innerText = "";
    document.querySelector('.display').innerText="0";
}