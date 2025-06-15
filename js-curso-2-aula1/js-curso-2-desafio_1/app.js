let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarCliqueConsole() {
    console.log('O botão foi clicado');
}

function verificarCliqueAlert() {
    alert('Eu amo JS');
}

function verificarCliquePrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somarDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}