import java.util.Scanner;

public class ContaCorrente {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nome = "Gabriel Verdi";
        String tipoDeConta = "Corrente";
        double saldo = 3500.00;
        int opcao = 0;

        System.out.println("*********************************");
        System.out.println("Dados iniciais deo cliente:");
        System.out.println("Nome: " + nome);
        System.out.println("Tipo da conta: " + tipoDeConta);
        System.out.println("Saldo: " + saldo);
        System.out.println("\n*********************************");

        while (opcao != 4) {
            System.out.println("-----Digite sua opção-----");
            System.out.println("1. Consultar saldo");
            System.out.println("2. Receber valor");
            System.out.println("3. Transferir valor");
            System.out.println("4. Sair");
            opcao = sc.nextInt();

            if (opcao == 1) {
                System.out.println("O saldo atual é: " + saldo);
            } else if (opcao == 2) {
                System.out.println("Valor recebido: ");
                double valor = sc.nextDouble();
                saldo += valor;
                System.out.println("Novo saldo: " + saldo);
            } else if (opcao == 3) {
                System.out.println("Qual o valor que deseja transferir?");
                double valor = sc.nextDouble();
                if (valor > saldo) {
                    System.out.println("Não há saldo para realizar a transferência.");
                } else {
                    saldo -= valor;
                    System.out.println("Novo saldo: " + saldo);
                }
            } else if (opcao != 4) {
                System.out.println("Opção inválida. Tente novamente.");
            }
        }

        sc.close();
    }
}
