public class Condicional {
    public static void main(String[] args) {
        int anoDeLancamento = 1985;
        boolean incluidoNoPlano = false;
        double notaDoFilme = 8.5;
        String tipoPlano = "Plus";

        if (anoDeLancamento >= 2024) {
            System.out.println("Lançamento que os clientes estão curtindo!");
        } else {
            System.out.println("Filme retrô que vale a pena assistir!");
        }

        if (incluidoNoPlano || tipoPlano.equals("Plus")) {
            System.out.println("Filme liberado");
        } else {
            System.out.println("Deve pagar a locação");
        }
    }
}
