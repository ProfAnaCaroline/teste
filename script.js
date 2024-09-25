
function exibirAlerta() {
    const mensagemSecreta = "Logicamente, o professor Sr. José Marcos Júnior se tornou o principal suspeito e, ao saber disso, o responsável...";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}
function exibirAlertaII() {
    const mensagemSecretaII = "zelador Sr. Arthur Moreira, confessou que aproveitou do seu acesso restrito para jogar Free Fire no computador da biblioteca e apagou sem querer o arquivo";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecretaII;
    document.querySelector("button").classList.add("remove");
}