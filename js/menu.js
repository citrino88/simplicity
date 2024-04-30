`use strict`

console.log("menu");

/* Selecionar o elemento que acionará a lista de links do menu  */

const botaoMenu = document.querySelector("nav h2 a");
// esse é o elemento que vai selecionar a lista do menu

/* Selecionando a lista de links / menu */
const listaDeLinks = document.querySelector(".links-menu");

/* Monitorando o evento de click/toque no botaoMenu */
botaoMenu.addEventListener("click", function name(event) {
    /* "Prevenir / anular" o evento padrão do link de redirecionamento/recarregamento da página */
    event.preventDefault();
    console.log("belezzza!");
    listaDeLinks.classList.toggle("aberto") // para ter a alternância

    if(listaDeLinks.classList.contains ("aberto")){
        botaoMenu.innerHTML = "Fechar &times;"
    }else{
        botaoMenu.innerHTML = "Menu &equiv;"
    }
});
