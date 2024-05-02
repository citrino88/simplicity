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
const mensagemStatus = formulario.querySelector("#status");
/* obs: formulario.querySelector(""); AO INVÉS DE document.querySelector("#estado"); pois só procura dentro do formulario, melhora a perforce, não precisa percorrer o documento inteiro. */

/* Detectando quando o botão de buscar CEP é acionado */
//addEventListener = acionar um Ouvidor de Evento (quando ocorrer o Evento tal)
botaoBuscar.addEventListener("click", function(event){
    //console.log("agora vai!");
    /* Anular o comportamento padrão de redirecionamento/recarregamento da página. Sempre aconte ao trabalhar com <a> e <form> */
    event.preventDefault();

    /* Verificando se o cep NÃO TEM 8 dígitos */
    if ( campoCep.value.length !== 8){
        /* Informar o usuário sobre o erro: */
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";
        /* Parar completamente a execução */
        return;
    /* }else{
        guardar o valor do cep digitado
        let cepInformado = campoCep.value; */
    }

    /* Guardando o valor do cep digitado/informado, abaixo sem o else, é chamado code clean (também, early return) */
    let cepInformado = campoCep.value;
    //console.log(cepInformado); para testar se está funcionando

    /* AJAX - Asyncronous JavaScript And XML
    (JavaScript assíncrono e XML) 
    
    Técnica de comunicação (transmissão, recebimento) de dados que permite o processamento em conjunto com APIs (ou Web Services)
    */

    // Etapa 1: prepara a URL da API com o CEP informado

    // Etapa 2: acessar a API (com a URL) e guardar o retorno dela

    // Etapa 3: extrair os dados da resposta da API em formado JSON

    // Etapa 4: lidar com os dados (em caso de erro e de sucesso)
});

