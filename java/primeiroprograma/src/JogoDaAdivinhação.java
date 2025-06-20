import java.util.Random;
import java.util.Scanner;

public class JogoDaAdivinhação {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numeroAleatorio = new Random().nextInt(100);
        int tentativas = 0;
        int numeroDigitado = 0;
        System.out.println("Adivinhe o número entre 0 e 100 em 5 tentativas");
        while (tentativas < 5) {
            System.out.println("Qual o seu palpite: ");
            numeroDigitado = sc.nextInt();
            tentativas++;
            if (numeroDigitado == numeroAleatorio) {
                System.out.println("Parabéns você acertou o número em " + tentativas + " tentativas!");
                break;
            } else if (numeroDigitado < numeroAleatorio) {
                System.out.println("O número digitado é maior que o número gerado");
            } else {
                System.out.println("O número digitado é menor que o número gerado");
            }
        }

        if (tentativas == 5 && numeroDigitado != numeroAleatorio) {
            System.out.println("Você não conseguiiu acertar o número em 5 tentativas. O número era: " + numeroAleatorio);
        }

        sc.close();
    }
}
