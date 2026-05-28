function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

    if(!arma){
        log.innerHTML = "Escolha uma Arma vagabundo safado, vai na mão mesmo?";
        return;
    }

    const dado = Math.floor(Math.random()*20) + 1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}<strong> com ${arma}`;

    switch(classe){
        case "Combatente": 
        if(arma.toLowerCase() === "espada" && dado === 20){
            resultado += " <span class = 'critico'> CRITICO: Você DECAPITOU o dragão com uma espada!</span>";
            log.innerHTML = resultado;
        
        }else if(dado > 10){
            resultado += "<span class = 'sucesso'> VITÓRIA: você MERENDOU ele com um(a) "+arma+", BOAAAAA!!</span>";
            log.innerHTML = resultado;

        }else{
            resultado += "<span class = 'derrota'> DERROTA: O dragão te moeu na porrada seu lixo!!</span>";
            log.innerHTML = resultado;
        
        };
        break;
        case "Mago": 
        if(arma.toLowerCase() === "cajado" && dado === 20){
            resultado += "<span class = 'critico'> CRITICO: Você matou o dragão com uma macumba das locas!</span>";
            log.innerHTML = resultado;
        
        }else if(dado > 10){
            resultado += "<span class = 'sucesso'> VITÓRIA: você ESTOUROU o dragão com um(a) "+arma+" boaaa!</span>";
            log.innerHTML = resultado;

        }else{
            resultado += "<span class = 'derrota'> DERROTA: O CARA PERDEU DE MAGO?????? Tu é ruim ein</span>";
            log.innerHTML = resultado;
        
        };
        break;
        case "Arqueiro": 
        if(arma.toLowerCase() === "Arco" && dado === 20){
            resultado += "<span class = 'critico'> CRITICO: Você matou o dragão com técnicas incriveis!!/span>";
            log.innerHTML = resultado;
        
        }else if(dado > 10){
            resultado += "<span class = 'sucesso'> VITÓRIA: você matou o dragão com um(a) "+arma+", boaaa!</span>";
            log.innerHTML = resultado;

        }else{
            resultado += "<span class = 'derrota'> DERROTA: Meu Deus, o cara perdeu, muito ruim slk</span>";
            log.innerHTML = resultado;
        
        };
        break;

        default:
            resultado = "<span class = 'derrota'> O dragão fugiu...</span>";
    }
    log.innerHTML = resultado;



}







