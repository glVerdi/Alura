alert("Boas vindas ao jogo do número secreto"); //Exibe uma mensagem na tela
let numeroSecreto = parseInt(Math.random() * 100) + 1; //Geração de números pseudo aleatótios, pegando inteiro de 1 até 100
console.log(numeroSecreto); //visualização pelo console, que está no inspecionar, isso é uma boa prática para fazer testes
let chute; //Variável
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 100"); //Pede para a pessoa digitar algo
    if (chute == numeroSecreto) { 
        break;

    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa" // operação ternário 
alert(`Isso ai, você dewscobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); //Concateção utilizando Template Strings

/*if (tentativas > 1) {
    alert(`Isso ai, você dewscobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`); //Concateção utilizando Template Strings
} else {
    alert(`Isso ai, você dewscobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`); //Concateção utilizando Template Strings
}*/
