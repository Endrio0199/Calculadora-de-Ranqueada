let heroi = "EndIce"
let vitorias = 100
let derrotas = 5
let saldovitorias = vitorias - derrotas
let nivel

if (vitorias < 10){
    nivel = "ferro"
}else if (vitorias >= 10 && vitorias <= 20){
    nivel = "bronze"
}else if (vitorias >= 21 && vitorias <= 50){
    nivel = "Prata"
}else if (vitorias >= 51 && vitorias <= 80){
    nivel = "Ouro"
}else if (vitorias >= 81 && vitorias <= 90){
    nivel = "Diamante"
}else if (vitorias >= 91 && vitorias <= 100){
    nivel = "Lendário"
}else {
    nivel = "Imortal"
}

function rankeada(vitorias, derrotas){
    return saldovitorias
}

console.log("O Héroi chamado " + heroi + " tem o saldo de vitórias de " + saldovitorias + " e está no nível  " + nivel)