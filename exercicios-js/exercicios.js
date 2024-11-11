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

let contador = 1;
while (contador <= 10) {
    console.log(contador)
    contador++;
}

let contador1 = 10;
while (contador1 >= 0) {
    console.log(contador1);
    contador1--;
}

let contagemRegressiva = prompt("Digite um número para a contagem regressiva")
while (contagemRegressiva >= 0) {
    console.log(contagemRegressiva);
    contagemRegressiva--;
}

let contador2 = 0;
let contagemProgressiva = prompt("Digite um número para a contagem progressiva")
while (contador2 <= contagemProgressiva) {
    console.log(contador2);
    contador2++;
}

console.log("Boas vindas");

let nome3 = "Gabriel";
console.log(`Olá, ${nome3}`);

let nome4 = "Gabriel";
alert(`Olá, ${nome4}`);

let linguagemProgramacao = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemProgramacao);

let valor1 = 25;
let valor2 = 46;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

let valor3 = 87;
let valor4 = 93;
let resultado1 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado1}`);

let idade3 = prompt("Qual a sua idade?");
if (idade3 >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade")
}

let numero1 = prompt("Digite um valor");
if (numero1 > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é igual a zero");
}

let contador3 = 1;
while (contador3 <= 10) {
    console.log(contador3);
    contador++
}

let nota = 7;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let aleatorio = Math.random();
console.log(aleatorio);

let aleatorio1A10 = parseInt(Math.random * 10) + 1;
console.log(aleatorio1A10);

let aleatorio1A1000 = parseInt(Math.random * 1000) + 1;
console.log(aleatorio1A1000);