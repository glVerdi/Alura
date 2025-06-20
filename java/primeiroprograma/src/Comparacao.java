import java.util.Scanner;

public class Comparacao {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o primeiro número inteiro");
        int numero1 = sc.nextInt();
        System.out.println("Digite o segundo número inteiro");
        int numero2 = sc.nextInt();
        if (numero1 == numero2) {
            System.out.println("Os númweros são iguais");
        } else if (numero1 > numero2) {
            System.out.println("O primeiro número é maior");
        } else {
            System.out.println("O segundo número é maior");
        }

        sc.close();
    }
}
