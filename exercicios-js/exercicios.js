alert("Boas Vindas ao nosso site");

let nome = "Lua";

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 100;

alert("Erro! Preencha todos os campos");

let mensaDeErro = ("Erro! Preencha todos os campos");
alert(mensaDeErro);

let nome1 = prompt("Qual o seu nome?");

let idade1 = prompt("Qual a sua idade?");

let idade2 = prompt("Qual a sua idade?")
if (idade >= 18 ) {
    alert("Pode tirar a habilitação!");
}

let diaSemana = prompt("Que dia da semana é hoje?");
if (diaSemana == "Sabado" ) {
    alert("Bom fim de semana!");
} else if (diaSemana == "Domingo"){
    alert("Bom fim de semana");
} else {
    alert("Boa semana");
}

let numero = prompt("Digite um número");
if (numero > 0) {
    alert("O número digitado é positivo");
} else {
    alert("O número digitado é negativo");
}

let pontuacao = prompt("Qual a sua pontuação?");
if (pontuacao >= 100) {
    alert("Parabens você venceu");
} else {
    alert("Tente novamente para ganhar");
}

let saldo = 198392;
alert(`Seu saldo é: ${saldo}`);

let nome2 = prompt("Insira seu nome:");
alert(`Bem-vindo(a) ${nome}`);