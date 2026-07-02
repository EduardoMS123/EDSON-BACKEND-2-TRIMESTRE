

public class Aula09_ClasseAtributos {
    public static void main(String[] args){
        Carro09 meuCarro = new Carro09();
        meuCarro.modelo = "Fusca";
        meuCarro.cor = "Azul";
        meuCarro.ano = 1975;
    
        Carro09 meuCarro2 = new Carro09();
        meuCarro2.modelo = "Fiat";
        meuCarro2.cor = "Vermelho";
        meuCarro2.ano = 1988;        
    
        System.out.println("Carro criado!! " + meuCarro.modelo + " " + meuCarro.cor);
    
        };


};




