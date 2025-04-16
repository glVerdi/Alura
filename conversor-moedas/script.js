valorWon = prompt("Digite um valor em wons");
valorDolar = prompt("Digite um valor em dólares");
valorEuro = prompt("Digite um valor em euros");

umWon = 257.40;
umDolar = 0.18;
umEuro = 0.16;

let conversaoWon = valorWon * umWon;
let conversaoDolar = valorDolar * umDolar;
let conversaoEuro = valorEuro * umEuro;

let valorFormatadoWon = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(conversaoWon);
let valorFormatadoDolar = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(conversaoDolar);
let valorFormatadoEuro = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(conversaoEuro);

alert("O valor de " + valorWon + " Wons convertido para reais é de : R$" + valorFormatadoWon);
alert("O valor de " + valorDolar + " Dólares convertido para reais é de : R$" + valorFormatadoDolar);
alert("O valor de " + valorEuro + " Euros convertido para reais é de : R$" + valorFormatadoEuro);