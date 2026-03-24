function iniciarJornada() {
    let nome = prompt("Qual é o seu nome, Cavaleiro?");
    let cosmoInicial = +prompt("Qual é o seu Cosmo Inicial? (Digite um número, ex: 800)");
    
    let cosmoAtual = cosmoInicial;
    let statusVida = "Vivo";

    let sacrificarSentido = confirm("A batalha será dura. Deseja sacrificar um sentido para despertar o Sétimo Sentido?");
    
    if (sacrificarSentido) {
        cosmoAtual *= 2; 
        alert("Você sacrificou um sentido! Seu cosmo dobrou para " + cosmoAtual);
    }

    let danoCasaDeTouro = 300;
    alert(`Aldebaran de Touro desferiu o Grande Chifre! Você perdeu ${danoCasaDeTouro} de cosmo.`);
    cosmoAtual -= danoCasaDeTouro; 


    if (cosmoAtual >= 1000 && statusVida === "Vivo") {
        alert(`Parabéns, ${nome}, você salvou Athena com ${cosmoAtual} de cosmo restante!`);
    } else {
        alert(`Infelizmente, ${nome}, seu cosmo se apagou. A Terra está perdida... (Cosmo atual: ${cosmoAtual})`);
    }
}