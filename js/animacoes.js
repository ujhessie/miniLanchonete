const btnMostrarCarrinho = document.querySelector('#btn-mostrar-carrinho')
const btnFecharCarrinho = document.querySelector('#btn-fechar-carrinho')
const janelaCarrinho = document.querySelector('.janela-carrinho')
const main = document.querySelector('main')

function mostrarCarrinho() {
    console.log('mostrando carrinho')
    janelaCarrinho.classList.add('janela-carrinho-ativada')
    main.classList.add('sem-foco')
}

function fecharCarrinho() {
    janelaCarrinho.classList.remove('janela-carrinho-ativada')
    main.classList.remove('sem-foco')
}