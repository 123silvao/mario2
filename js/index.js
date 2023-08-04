const botaoTrailer = document.querySelector(".botao-trailer");

console.log(botaoTrailer);
//pegar o click do botao
botaoTrailer.addEventListener("click", () => {
    //abrir a modal na tela
    modal.classList.add("aberto");
});

//pegar o elemento da modal
const modal = document.querySelector(".modal");


