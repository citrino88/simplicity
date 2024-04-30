`use strict`

console.log("menu");

/* Selecionar o elemento que acionará a lista de links do menu  */

const botaoMenu = document.querySelector("nav h2");
// esse é o elemento que vai selecionar a lista do menu

/* Selecionando a lista de links / menu */
const listaDeLinks = document.querySelector(".links-menu");

/* Monitorando o evento de click/toque no botaoMenu */
botaoMenu.addEventListener("click", function name(params) {
    console.log("belezzza!");
    
});