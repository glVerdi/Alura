let venceu = 0; //se for 1, perdeu. Se for 0 ganhou 

for (let rodada = 1; rodada <= 3; rodada++) {
  console.log("Rodada: " + rodada);
  
  let escolhaJogador = prompt("Nível " + rodada + ", escolha uma porta (1, 2 ou 3)");

  while (escolhaJogador < 1 || escolhaJogador > 3) {
    alert("Escolha inválida! Por favor, escolha uma porta entre 1 e 3.");
    escolhaJogador = prompt("Nível " + rodada + ", escolha uma porta (1, 2 ou 3)");
  }

  let portaErrada = Math.floor(Math.random() * 3) + 1;
  
  if (escolhaJogador == portaErrada) {
    alert("Porta errada! Acabou o jogo para você");
    rodada = 1000; // força a parada 
    ganhou = 1;
  } else {
    alert("Passou! Porta errada era a de número: " + portaErrada);
  }
}

if (ganhou == 0) {
  alert("Parabéns! Você venceu o desafio!");
}