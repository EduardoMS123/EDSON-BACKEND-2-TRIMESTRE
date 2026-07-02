import java.util.Scanner;

public class Aula11B_MetodoParametroScanner {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        Aula11_CalculadoraSimples cal= new Aula11_CalculadoraSimples();

        System.out.println("====Sistema de Soma====");
        System.out.println("Digite o primeiro número inteiro: ");
        int n1 = teclado.nextInt();

        System.out.println("Digite o segundo número inteiro: ");
        int n2 = teclado.nextInt();

        cal.SomarDoisNumeros(n1, n2);
        teclado.close();
    }
}
