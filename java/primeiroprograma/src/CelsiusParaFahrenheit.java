public class CelsiusParaFahrenheit {
    public static void main(String[] args) {
        int temperaturaEmGraus = 25;
        int temperaturaEmFahrenheit = (int) ((temperaturaEmGraus * 1.8) + 32);
        System.out.println(String.format("A temperatura de %d Graus, é igual a %d em Fahrenheit", temperaturaEmGraus, temperaturaEmFahrenheit));
    }
}