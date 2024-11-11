alert("Boas vindas ao jogo do número secreto"); //Exibe uma mensagem na tela
let numeroSecreto = 4; //Variável
console.log(numeroSecreto); //visualização pelo console, que está no inspecionar
let chute = prompt("Escolha um número entre 1 e 10"); //Pede para a pessoa digitar algo

if (chute == numeroSecreto) { //Se chute for igual ao número secreto
    alert(`Isso ai, você dewscobriu o número secreto ${numeroSecreto}`); //Concateção utilizando Template Strings
} else {
    alert("Você errou :(");
}

