`use strict`;

//console.log("olá mundo");

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
botaoBuscar.addEventListener("click", async function(event){
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
    let url = `https://viacep.com.br/ws/${cepInformado}/json/`;
    //console.log(url);

    // Etapa 2: acessar a API (com a URL) e guardar o retorno dela
    const resposta = await fetch(url);
    //console.log(resposta);

    // Etapa 3: extrair os dados da resposta da API em formado JSON
    const dados = await resposta.json();
    //console.log(dados);

    // Etapa 4: lidar com os dados (em caso de erro e de sucesso)

    /* Se existir a string/prop "erro" no objeto dados */
    if ("erro" in dados) {
        mensagemStatus.textContent = "CEP inexistente!";
        mensagemStatus.style.color = "red";
    } else {
        mensagemStatus.textContent = "CEP encontrado!";
        mensagemStatus.style.color = "blue";

        /* Selecionando os elementos que estão escondidos */
        const camposRestantes = formulario.querySelectorAll('.campos-restantes');

        /* Removendo a classe usando um loop (isso fará os campos aparecerem novamente) */
        for (const campo of camposRestantes){
            campo.classList.remove("campos-restantes");
        }

        /* Atribuindo os dados a cada campo */
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;

    }
});

