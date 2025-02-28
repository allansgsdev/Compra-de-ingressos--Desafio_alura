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
function comprar() {
    var local = campoIngresso.value;
    var quantidade = campoQuantidade.value;

    if (!local || local.trim() === '') {
        alert('Insira um tipo de ingresso válido.');
    } else {
        if (!isNaN(quantidade) && quantidade >= 1) {
            if (confirm(`Você realmente deseja comprar este ingresso?\n\n${quantidade}x ${local}`)) {
                if (local == 'pista') {
                    if (campoQuantidadePista.textContent >= quantidade) {
                        campoQuantidadePista.textContent -= quantidade;
                    } else {
                        alert('Ingresso indisponível!');
                    }
                }
                if (local == 'superior') {
                    if (campoQuantidadeSuperior.textContent >= quantidade) {
                        campoQuantidadeSuperior.textContent -= quantidade;
                    } else {
                        alert('Ingresso indisponível!');
                    }
                }
                if (local == 'inferior') {
                    if (campoQuantidadeInferior.textContent >= quantidade) {
                        campoQuantidadeInferior.textContent -= quantidade;
                    } else {
                        alert('Ingresso indisponível!');
                    }
                }
            }
        } else {
            alert('Insira uma quantidade válida');
        }
    }

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