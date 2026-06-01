class Monstro{
    constructor(nome, hp){
        this.nome = nome;
        this.hp = Number(hp);
    };

    ReceberDano(DanoRecebido){
        this.hp -= DanoRecebido;
        if(this.hp <= 0){
            this.hp = 0;
            return `${this.nome} virou estatística...`
        }
        return `${this.nome} sofreu ${DanoRecebido} de dano!`
    };


};

let MonstroBatalha;
function AtualizaTela(){
    document.getElementById('statusNome').innerHTML = MonstroBatalha.nome;
    document.getElementById('statusHp').innerHTML = `Vida Atual: ${MonstroBatalha.hp}❤️`;

}

function IniciarJogo(){
    const nome = document.getElementById('nomeMonstro').value;
    const hp = document.getElementById('hpMonstro').value;
    document.getElementById('painel-criacao').style.display = "none";
    document.getElementById('painel-combate').style.display = "block";
    MonstroBatalha = new Monstro(nome, hp);
    AtualizaTela();
};


function BaterNoMonstro(){
    const valorDano = Number(document.getElementById('danoInput').value);
    const msg = MonstroBatalha.ReceberDano(valorDano);
    document.getElementById('log').innerHTML = msg
    AtualizaTela()
    
};



























