//Questão 4
//Máximo divisor comum
public class Mdc {
    public static int calcular(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a); // valor positivo
    }
}
