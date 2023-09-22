import java.util.Scanner;

public class NumerosInteiros {
    public static void exibirNumerosInteiros(int min, int max) {
        // Garante que min seja o menor dos dois números
        int inicio = min <= max ? min : max;
        int fim = min <= max ? max : min;

        System.out.printf("Números inteiros entre %d e %d:\n", inicio, fim);

        StringBuilder numerosString = new StringBuilder();

        for (int i = inicio; i <= fim; i++) {
            if (numerosString.length() != 0) {
                numerosString.append(", ");
            }
            numerosString.append(i);
        }

        System.out.printf("Números: %s\n", numerosString.toString());
        System.out.printf("Total de números: %d\n", fim - inicio + 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int num1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        int num2 = scanner.nextInt();

        exibirNumerosInteiros(num1, num2);
    }
}
