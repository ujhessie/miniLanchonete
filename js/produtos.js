const produtos = [

    {id: 1, nome: 'Hamburger Vegetariano', valor: 20.00, desc: 'Um maravilhoso hamburguer vegetariano.Bom para toda a família'},
    {id: 2, nome: 'Macarronada', valor: 30.00, desc: 'Uma macarronada completa e cheia de sabor'},
    {id: 3, nome: 'Cachorro-Quente', valor: 10.00, desc: 'Sim. Um cachorro quenete. Maravilhoso. Não?'},
    {id: 4, nome: 'Mistos Diversos', valor: 5.00, desc: 'Aqui eu fiquei com preguiça de arrumar'},
]


const divProdutos = document.querySelector('.div-produtos')


function renderizarProdutos(id, nome, valor, desc) {

    // criando divProduto
    const divProduto = document.createElement('div')
    divProduto.setAttribute('class', 'div-produto')

    // criando o elemnto 'img-produto'
    const imgProduto = document.createElement('img')
    imgProduto.setAttribute('class', 'img-produto')
    imgProduto.setAttribute('src', `../../img/produtos/${id}.png`)

    // criando o elemento 'nome-produto'
    const nomeProduto = document.createElement('h3')
    nomeProduto.setAttribute('class', 'nome-produto')
    nomeProduto.innerHTML = `${nome}`

    // criando elemento 'valor-produto'
    const valorProduto = document.createElement('h4')
    valorProduto.setAttribute('class', 'valor-produto')
    valorProduto.innerHTML = `R$ ${valor},00`


    // criando elemento 'desc-produto'
    const descProduto = document.createElement('p')
    descProduto.setAttribute('class', 'desc-produto')
    descProduto.innerHTML = `${desc}`


    // Adicionando filhos aos pais
    divProduto.appendChild(imgProduto)
    divProduto.appendChild(nomeProduto)
    divProduto.appendChild(valorProduto)
    divProduto.appendChild(descProduto)

    divProdutos.appendChild(divProduto)


}

for (let i = 0; i < produtos.length; i++) {
    renderizarProdutos(produtos[i].id, produtos[i].nome, produtos[i].valor, produtos[i].desc)
}

// renderizarProdutos(001, 'hamburguer', 20.00, 'isto é apenas um teste')    