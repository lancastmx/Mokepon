const sectionseleccionarAtaque = document.getElementById('eligeAtaque')
const sectionreiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('botonMascota')
const botonReiniciar = document.getElementById('botonReiniciar')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let sectionseleccionarMascota = document.getElementById('eligeMascota')

// Corregido: Cambiar 'botonfuego' y 'botonAgua' a 'botonFuego' y 'botonAgua'
let inputCharmander;
let inputBolbasor;
let inputSquartul;

let spanMascotaJugador = document.getElementById('mascotaJugaror'); // Corregido: Cambiar 'mascotaJugador' a 'mascotaJugaror'
const spanMascotaEnemigo = document.getElementById('mascotaEnemigo'); // Corregido: Cambiar 'mascotaEnemigo' a 'mascotaEnemigo'

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-Jugador')
const ataqueDelEnemigo = document.getElementById('ataque-Enemigo')

const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('VidasEnemigo') // Corregido: Cambiar 'VidasEnemigo' a 'VidasEnemigo'

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let digipones = []
let ataqueJugador
let ataqueEnemigo
let opcionDedigipones
let mascotaJugador 
let ataquesDigipon
let botonFuego
let botonAgua
let botonTierra
let vidasJugador = 3
let vidasEnemigo = 3

class Digipon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}

let charmander = new Digipon('Charmander', './img/radiHuella.png', 5);

let bolbasor = new Digipon('Bolbasor', './img/Hipodogue.png', 5);

let squartul = new Digipon('Squartul', './img/Capipepo.png', 5);

digipones.push(charmander, bolbasor, squartul)

charmander.ataques.push(
    { nombre: '🔥', id: 'botonfuego' },
    { nombre: '🔥', id: 'botonfuego' },
    { nombre: '🔥', id: 'botonfuego' },
    { nombre: '💧', id: 'botonAgua' },
    { nombre: '🌄', id: 'botonTierra' },
)

bolbasor.ataques.push(
    { nombre: '🌄', id: 'botonTierra' },
    { nombre: '🌄', id: 'botonTierra' },
    { nombre: '🌄', id: 'botonTierra' },
    { nombre: '🔥', id: 'botonfuego' },
    { nombre: '💧', id: 'botonAgua' },
)

squartul.ataques.push(
    { nombre: '💧', id: 'botonAgua' },
    { nombre: '💧', id: 'botonAgua' },
    { nombre: '💧', id: 'botonAgua' },
    { nombre: '🔥', id: 'botonfuego' },
    { nombre: '🌄', id: 'botonTierra' },
)

function iniciarJuego() {

    sectionseleccionarAtaque.style.display = 'none'
    sectionreiniciar.style.display = 'none'

    digipones.forEach((digipon) => {
        opcionDedigipones = `
        <input type="radio" name="mascota" id="${digipon.nombre}" /> <!-- Corregido: Agregar comillas al ID -->
        <label class="tarjetaMokepon" for="${digipon.nombre}"> <!-- Corregido: Agregar comillas al 'for' -->
            <p>${digipon.nombre}</p>
            <img src="${digipon.foto}" alt="${digipon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDedigipones
    })

    // Corregido: Mover estas asignaciones después del bucle forEach
    inputCharmander = document.getElementById('Charmander');
    inputBolbasor = document.getElementById('Bolbasor');
    inputSquartul = document.getElementById('Squartul');

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionseleccionarMascota.style.display = 'none'
    sectionseleccionarAtaque.style.display = 'flex'

    // Corregido: Usar comillas simples para IDs con espacios
    if (inputCharmander.checked) {
        spanMascotaJugador.innerHTML = inputCharmander.id;
        mascotaJugador = inputCharmander.id
        spanVidasJugador.innerHTML = vidasJugador; // Mostrar vidas del jugador
        spanVidasEnemigo.innerHTML = vidasEnemigo; // Mostrar vidas del enemigo
    } else if (inputBolbasor.checked) {
        spanMascotaJugador.innerHTML = inputBolbasor.id;
        mascotaJugador =  inputBolbasor.id
        spanVidasJugador.innerHTML = vidasJugador;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (inputSquartul.checked) {
        spanMascotaJugador.innerHTML = inputSquartul.id;
        mascotaJugador =  inputSquartul.id
        spanVidasJugador.innerHTML = vidasJugador;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        alert("Debes elegir una mascota");
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i< digipones.length; i++){
        if (mascotaJugador === digipones[i].nombre){
            ataques = digipones[i].ataques
        }
    }
    mostrarAtaque(ataques)
}

function mostrarAtaque(ataques){
    ataques.forEach((ataque) => {
        ataquesDigipon = `
        <button id=${ataque.id} class="botonDeataque" id="botonfuego">${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesDigipon
    })
    botonFuego = document.getElementById('botonfuego')
    botonAgua = document.getElementById('botonAgua')
    botonTierra = document.getElementById('botonTierra')

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, digipones.length -1)
    
    spanMascotaEnemigo.innerHTML = digipones[mascotaAleatoria].nombre
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio === 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

function crearMensajes(resultado) {
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate() {
    if (ataqueJugador === ataqueEnemigo) {
        crearMensajes("Empataste")
    } else if (ataqueJugador === 'Fuego' && ataqueEnemigo === 'Tierra') {
        crearMensajes("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador === 'Agua' && ataqueEnemigo === 'Fuego') {
        crearMensajes("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador === 'Tierra' && ataqueEnemigo === 'Agua') {
        crearMensajes("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensajes("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revizarVidas()
}

function revizarVidas() {
    if (vidasEnemigo === 0) {
        crearMensajeFinal("Felicitaciones ¡GANASTE!😁")
    } else if (vidasJugador === 0) {
        crearMensajeFinal("Lo siento, Perdiste 😔")
    }
}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionreiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
