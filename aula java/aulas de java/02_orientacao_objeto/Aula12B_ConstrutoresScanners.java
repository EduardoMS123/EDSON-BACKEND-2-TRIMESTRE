import java.util.Scanner;

public class Aula12B_ConstrutoresScanners {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("===Cadastro Produto===");
        System.out.println("Nome do Console:");
        String nomeDigitado = teclado.nextLine();

        System.out.println("Preço de Mercado: R$");
        double precoDigitado = teclado.nextDouble();

        VideoGame console = new VideoGame(nomeDigitado, precoDigitado);
        System.out.println("Console cadastrado " + console.nome + "\nPreço: " + console.preco);

        teclado.close();
    }
}
