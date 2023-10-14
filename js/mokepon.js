let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionseleccionarAtaque = document.getElementById('eligeAtaque')
    sectionseleccionarAtaque.style.display = 'none'

    let sectionreiniciar = document.getElementById('reiniciar')
    sectionreiniciar.style.display = 'none'

    let botoMascotaJugador = document.getElementById('botonMascota')
    botoMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('botonfuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('botonAgua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('botonTierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('botonReiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}
function seleccionarMascotaJugador(){
    let sectionseleccionarMascota = document.getElementById('eligeMascota')
    sectionseleccionarMascota.style.display = 'none'
    
    let sectionseleccionarAtaque = document.getElementById('eligeAtaque')
    sectionseleccionarAtaque.style.display = 'flex'


    let spanMascotaJugador = document.getElementById('mascotaJugaror')

    if (charmander.checked){
        spanMascotaJugador.innerHTML = 'Charmander'
    } else if (bolbasor.checked){
        spanMascotaJugador.innerHTML = 'bolbasor'
    } else if (squartul.checked){
        spanMascotaJugador.innerHTML = 'squartul'
    }  else {
        alert("Debes elegir una mascota")
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAlatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

    if (mascotaAlatoria == 1 ) {
        spanMascotaEnemigo.innerHTML = 'charmander'
    } else if (mascotaAlatoria == 2 ) {
        spanMascotaEnemigo.innerHTML = 'bolbasor'
    } else {
        spanMascotaEnemigo.innerHTML = 'squartul'
    } 
}
function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua (){
    ataqueJugador ='Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador='Tierra'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let sectionseleccionarMascota = document.getElementById('eligeAtaque')
    sectionseleccionarMascota.style.display = 'flex'

    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1 ){
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo= 'Tierra'
    }
    combate()
}
function crearMensajes(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-Jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-Enemigo')
   
    
    let nuevoAtaqueJugaro = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugaro.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    ataqueDelJugador.appendChild(nuevoAtaqueJugaro)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function combate(){
    // combate
    let spanVidasJugador = document.getElementById('vidasJugador')
    let spanVidasEnemigo = document.getElementById('VidasEnemigo')

    if (ataqueJugador  == ataqueEnemigo){
        crearMensajes("Empataste")
    } else if (ataqueJugador  == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensajes("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo  
    }else if (ataqueJugador  == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensajes("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo  
    }else if (ataqueJugador  == 'Tierra' && ataqueEnemigo == 'Agua') {
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
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones ¡GANASTE!😁")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento, Perdiste 😔")
    }

}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal


    let botonFuego = document.getElementById('botonfuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('botonAgua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('botonTierra')
    botonTierra.disabled = true

    let sectionreiniciar = document.getElementById('reiniciar')
    sectionreiniciar.style.display = 'block'
}
function reiniciarJuego(){
    location.reload()
}
window.addEventListener('load', iniciarJuego)