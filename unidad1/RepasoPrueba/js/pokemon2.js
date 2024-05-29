const textoInicial = document.getElementById('textoInicial');
const imagenInicial = document.getElementById('imagenInicial');
const mensajes = document.getElementById('mensajes');
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');
const opcion3 = document.getElementById('opcion3');
const opcion4 = document.getElementById('opcion4');
const reiniciar = document.getElementById('reiniciar');

const imagenCorrecta = 'imagen_correcta.jpg';

opcion1.addEventListener('click', () => verificarRespuesta('Pokémon incorrecto, la respuesta es: excadrill', 'red'));
opcion2.addEventListener('click', () => verificarRespuesta('Pokémon incorrecto, la respuesta es: excadrill', 'red'));
opcion3.addEventListener('click', () => verificarRespuesta('Felicitaciones, has seleccionado la opción correcta', 'yellow'));
opcion4.addEventListener('click', () => verificarRespuesta('Pokémon incorrecto, la respuesta es: excadrill', 'red'));

reiniciar.addEventListener('click', () => {
    mensajes.innerHTML = '';
    imagenInicial.src = 'imagen_inicial.jpg';
    textoInicial.style.color = 'black';
});

function verificarRespuesta(mensaje, color) {
    const div = document.createElement('div');
    div.textContent = mensaje;
    mensajes.appendChild(div);
    imagenInicial.src = imagenCorrecta;
    textoInicial.style.color = color;
}
