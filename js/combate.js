// funciones
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra💎"
    } else if (jugada == 2) {
        resultado = "Papel 📄"
    } else if (jugada == 3) {
        resultado = "Tijeras ✂"
    } else {
        resultado = "Elegiste mal"
    }
    return resultado
}


let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let empate = 0

while(triunfos < 3 && perdidas < 3 && empate < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elige: piedra papel o tijera") 
    
    // Eleccion
    alert("Pc elige: " + eleccion(pc))
    alert("Tu eliges " + eleccion(jugador))
    // combate
    if (jugador == pc){
        alert("empate")
        empate = empate + 1
    } else if (jugador == 1 && pc == 3) {
        alert("ganaste")
        triunfos = triunfos + 1
    }else if (jugador == 2 && pc == 1) {
        alert("ganaste")
        triunfos = triunfos + 1
    }else if (jugador == 3 && pc == 2) {
        alert("ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
        perdidas= perdidas + 1
    }

}

alert("Ganaste: " + triunfos + " veces. Perdiste: " + perdidas + " veses. Empataste: " + empate + " veses.")
