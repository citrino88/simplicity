`use strict`

console.log("olá mundo");

// Selecionando os elementos que serão manipulados

const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagem = formulario.querySelector("#status");
/* obs: formulario.querySelector(""); AO INVÉS DE document.querySelector("#estado"); pois só procura dentro do formulario, melhora a perforce, não precisa percorrer o documento inteiro. */

