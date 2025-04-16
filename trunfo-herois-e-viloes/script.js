//Criar uma lista de 3 jogadores

herois = ["", "", ""]
viloes = ["", "", ""]
forcaHerois = 0
forcaViloes = 0
alert("O array herois contém: " + herois)
for (let i = 0; i < 3; i++) {
  escolhaHerois = prompt("Digite qual herói que chamar para o seu time " + (i + 1)) //ira executar 3 vezes
  herois[i] = escolhaHerois //armazenara os personagens dentro do array nas posições certas
  //Calcular a força de cada jogador, e depois somar para saber a força do time
  forcaHerois += + Math.floor(Math.random() * 10) + 1
}
alert("Agora o array herois contém: " + herois)
alert("O array vilões contém: " + viloes)
for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 10)
  viloesPossiveis = ["Thanos ", "Coringa ", "Dr. Destino ", "Espantalho ", "Duende Verde ", "Darkseid ", "DeathStroke ", "Arlequina ", "Pinguim ", "Duas Caras "]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  //Calcular a força de cada jogador do time do computador
  forcaViloes += Math.floor(Math.random() * 10) + 1
}
alert("Agora o array viloes contém: " + viloes)

//Comparar os dois times para saber quem venceu 
if (forcaHerois > forcaViloes) {
  alert("Seu time é muito forte! Você ganhou! A sua força foi de: " + forcaHerois)
} else if (forcaHerois < forcaViloes){
  alert("Seu time é fraquinho! O computador ganhou! A força foi de: " + forcaViloes)
} else {
  alert ("Os dois times tem a mesma força! Vocês empataram!")
}