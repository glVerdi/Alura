public class ConversaoDolaresParaReais {
    public static void main(String[] args) {
        double valorEmDolares = 550.87;
        double valorEmReais = valorEmDolares * 4.94;
        System.out.println(String.format("O valor em dólares de: %.2f é igual a %.2f em reais",valorEmDolares, valorEmReais));
    }
}
