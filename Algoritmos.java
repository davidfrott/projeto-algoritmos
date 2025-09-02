import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Algoritmos {

    // 1. Número Primo
    public static boolean ehPrimo(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // 2. Somatório
    public static int somatorio(int[] numeros) {
        int soma = 0;
        for (int numero : numeros) {
            soma += numero;
        }
        return soma;
    }

    // 3. Fibonacci
    public static List<Integer> fibonacci(int n) {
        List<Integer> sequencia = new ArrayList<>();
        if (n <= 0) return sequencia;
        sequencia.add(0);
        if (n == 1) return sequencia;
        sequencia.add(1);
        for (int i = 2; i < n; i++) {
            sequencia.add(sequencia.get(i - 1) + sequencia.get(i - 2));
        }
        return sequencia;
    }

    // 4. Máximo Divisor Comum (MDC)
    public static int mdc(int a, int b) {
        if (b == 0) return a;
        return mdc(b, a % b);
    }

    // 5. Ordenação (Quicksort)
    public static void quicksort(int[] arr, int inicio, int fim) {
        if (inicio < fim) {
            int pivoIndex = particao(arr, inicio, fim);
            quicksort(arr, inicio, pivoIndex - 1);
            quicksort(arr, pivoIndex + 1, fim);
        }
    }
    
    private static int particao(int[] arr, int inicio, int fim) {
        int pivo = arr[fim];
        int i = (inicio - 1);
        for (int j = inicio; j < fim; j++) {
            if (arr[j] <= pivo) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[fim];
        arr[fim] = temp;
        return i + 1;
    }

    // 6. Contagem em Intervalo
    public static int contarNoIntervalo(int[] dados, int inicio, int fim) {
        int contagem = 0;
        for (int numero : dados) {
            if (numero >= inicio && numero <= fim) {
                contagem++;
            }
        }
        return contagem;
    }

    // Método principal
    public static void main(String[] args) {
        System.out.println("--- Testando Funções ---");

        System.out.println("1. É primo?");
        System.out.println("7 é primo? " + ehPrimo(7));   
        System.out.println("10 é primo? " + ehPrimo(10)); 

        System.out.println("\n2. Somatório:");
        int[] arraySoma = {5, 10, 15, 20};
        System.out.println("Soma de " + Arrays.toString(arraySoma) + " é " + somatorio(arraySoma)); 

        System.out.println("\n3. Fibonacci:");
        System.out.println("Os 10 primeiros termos de Fibonacci: " + fibonacci(10));

        System.out.println("\n4. MDC:");
        System.out.println("MDC de 48 e 18 é " + mdc(48, 18)); 

        System.out.println("\n5. Quicksort:");
        int[] arrayDesordenado = {10, 7, 8, 9, 1, 5};
        System.out.println("Array original: " + Arrays.toString(arrayDesordenado));
        quicksort(arrayDesordenado, 0, arrayDesordenado.length - 1);
        System.out.println("Array ordenado: " + Arrays.toString(arrayDesordenado));

        System.out.println("\n6. Contagem no Intervalo:");
        int[] dados = {1, 5, 10, 15, 20, 25, 30};
        System.out.println("Números entre 10 e 25 no conjunto " + Arrays.toString(dados) + ": " + contarNoIntervalo(dados, 10, 25)); // 4
    }
}