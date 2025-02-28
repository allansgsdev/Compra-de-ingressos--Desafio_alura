// *PÁGINA DE DESAFIOS*

// Desafio: Compra de Ingressos
// Autor: Allan Gomes
// Curso: Lógica de programação - Praticando com desafios
// Instituição: Alura


// DECLARAÇÃO E ATRIBUÇÃO DE VARIÁVEIS
let campoIngresso = document.getElementById('tipo-ingresso');
let campoQuantidade = document.getElementById('qtd');
let campoQuantidadePista = document.getElementById('qtd-pista');
let campoQuantidadeSuperior = document.getElementById('qtd-superior');
let campoQuantidadeInferior = document.getElementById('qtd-inferior');

// DECLARAÇÃO DE FUNÇÕES
function singularOuPlural(comparador, singular, plural) {
    var comparar = comparador > 1 ? singular : plural;
    return comparar
}

function comprar() {
    var local = campoIngresso.value;
    var quantidade = parseInt(campoQuantidade.value);
    var quantidadePista = parseInt(campoQuantidadePista.textContent);
    var quantidadeInferior = parseInt(campoQuantidadeInferior.textContent);
    var quantidadeSuperior = parseInt(campoQuantidadeSuperior.textContent);
    var indexIngresso = campoIngresso.selectedIndex;
    var textoIngresso = campoIngresso.options[indexIngresso].text;

    if (!local || local.trim() === '') {
        alert('Insira um tipo de ingresso válido.');
    } else {
        if (!isNaN(quantidade) && quantidade >= 1) {
            if (confirm(`Você realmente deseja comprar este ingresso?\n\n${quantidade}x ${textoIngresso}`)) {
                if (local == 'pista') {
                    if (quantidadePista >= quantidade) {
                        campoQuantidadePista.textContent -= quantidade;
                    } else {
                        alert(`Quantidade indisponível para ${textoIngresso}.\n\n${quantidadePista} ${singularOuPlural(quantidade, 'ingressos disponíveis', 'ingresso disponível')}`);
                    }
                }
                if (local == 'superior') {
                    if (quantidadeSuperior >= quantidade) {
                        campoQuantidadeSuperior.textContent -= quantidade;
                    } else {
                        alert(`Quantidade indisponível para ${textoIngresso}.\n\n${quantidadeSuperior} ${singularOuPlural(quantidade, 'ingressos disponíveis', 'ingresso disponível')}`);
                    }
                }
                if (local == 'inferior') {
                    if (quantidadeInferior >= quantidade) {
                        campoQuantidadeInferior.textContent -= quantidade;
                    } else {
                        alert(`Quantidade indisponível para ${textoIngresso}.\n\n${quantidadeInferior} ${singularOuPlural(quantidade, 'ingressos disponíveis', 'ingresso disponível')}`);
                    }
                }
            }
        } else {
            alert('Insira uma quantidade válida');
        }
    }
    campoQuantidade.value = '';
    return
}

// PROGRAMA PRINCIPAL
campoQuantidadePista.textContent = 100;
campoQuantidadeSuperior.textContent = 200;
campoQuantidadeInferior.textContent = 400;

const input = document.querySelector('input');

input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        comprar();
    }
})