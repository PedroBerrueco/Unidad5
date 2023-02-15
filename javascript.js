// Contador para los botones
let count = 0;

// Referencia a los elementos del formulario
const original = document.getElementById('original');
const derecha = document.getElementById('derecha');
const izquierda = document.getElementById('izquierda');
const contador = document.getElementById('contador');
const encriptado = document.getElementById('encriptado');
const submit = document.getElementById('submit');

// Función para mover el contador
function moverContador (direccion) {
    if (direccion === 'izquierda' && count > -10) {
        count -= 1;
    }
    if (direccion === 'derecha' && count < 10) {
        count += 1;
    }

    // Deshabilitar botones si se llega a los límites
    if (count === -10) {
        izquierda.setAttribute('disabled', 'disabled');
    }
    if (count === 10) {
        derecha.setAttribute('disabled', 'disabled');
    }

    // Habilitar los botones si se cambia de dirección
    if (count > -10) {
        izquierda.removeAttribute('disabled');
    }
    if (count < 10) {
        derecha.removeAttribute('disabled');
    }

    contador.value = count;
    console.log(count);
}


// Función para encriptar la palabra
function encriptarPalabra () {
    let palabra = original.value.toUpperCase();
    original.value = palabra;
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let palabraEncriptada = '';

    // Recorrer la palabra y encriptarla
    for (let i = 0; i < palabra.length; i++) {
        let letraActual = palabra[i];
        let indiceLetraActual = letras.indexOf(letraActual);
        let indiceLetraEncriptada = (indiceLetraActual + count + letras.length) % letras.length;
        if (indiceLetraEncriptada < 0) {
            indiceLetraEncriptada += letras.length;
        }
        let letraEncriptada = letras[indiceLetraEncriptada]
        palabraEncriptada += letraEncriptada;
    }

    encriptado.value = palabraEncriptada;
}

// Eventos para los botones
derecha.addEventListener('click', () => {
    moverContador('derecha');
});

izquierda.addEventListener('click', () => {
    moverContador('izquierda');
});

submit.addEventListener('click', () => {
    encriptarPalabra();
});