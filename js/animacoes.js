const btnMostrarCarrinho = document.querySelector('#btn-mostrar-carrinho')
const btnFecharCarrinho = document.querySelector('#btn-fechar-carrinho')
const janelaCarrinho = document.querySelector('.janela-carrinho')
const main = document.querySelector('main')
const html = document.querySelector('html')

function mostrarCarrinho() {
    console.log('mostrando carrinho')
    janelaCarrinho.classList.add('janela-carrinho-ativada')
    main.classList.add('sem-foco')
    html.classList.add('carrinho-ativo')
}

function fecharCarrinho() {
    janelaCarrinho.classList.remove('janela-carrinho-ativada')
    main.classList.remove('sem-foco')
    html.classList.remove('carrinho-ativo')
}