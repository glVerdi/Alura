public class CalculoDesconto {
    public static void main(String[] args) {
        double precoOriginal = 250.00;
        double percentualDesconto = 10.00;
        double desconto = (percentualDesconto / 100) * precoOriginal;
        double novoPreco = precoOriginal - desconto;

        System.out.println("Preço original: R$" + precoOriginal);
        System.out.println("Desconto: R$" + desconto);
        System.out.println("Novo preço: R$" + novoPreco);
    }
}
