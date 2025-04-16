let nome = prompt("Qual é o seu nome?");
let idade = prompt("Quantos anos você tem?");

if (idade < 18) {
  alert("Você não pode jogar jokenpo");
} else {
  let escolhaJogador = prompt("Digite guerreiro, mago ou arqueiro");
  let escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Converter a escolha do computador para texto
  let escolhaComputadorTexto;
  if (escolhaComputador === 1) {
    escolhaComputadorTexto = "guerreiro";
  } else if (escolhaComputador === 2) {
    escolhaComputadorTexto = "mago";
  } else {
    escolhaComputadorTexto = "arqueiro";
  }

  if (escolhaJogador === escolhaComputadorTexto) {
    alert("EMPATE");
  } else if (escolhaJogador === "gurreiro") {
    if (escolhaComputadorTexto === "mago") {
      alert("Computador venceu!");
    } else {
      alert(nome + " venceu!");
    }
  } else if (escolhaJogador === "mago") {
    if (escolhaComputadorTexto === "arqueiro") {
      alert("Computador venceu!");
    } else {
      alert(nome + " venceu!");
    }
  } else if (escolhaJogador === "arqueiro") {
    if (escolhaComputadorTexto === "guerreiro") {
      alert("Computador venceu!");
    } else {
      alert(nome + " venceu!");
    }
  } else {
    alert("Escolha inválida! Tente novamente.");
  }

  alert("A escolha do computador foi: " + escolhaComputadorTexto);
}