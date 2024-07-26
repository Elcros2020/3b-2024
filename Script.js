// Seleciona o elemento da barra de pesquisa
var searchBar = document.getElementById("search-bar");

// Adiciona um ouvinte de evento para quando a barra de pesquisa receber foco
searchBar.addEventListener("focus", function() {
    // Aumenta a largura da barra de pesquisa
    searchBar.style.width = "300px";
});

// Adiciona um ouvinte de evento para quando a barra de pesquisa perder foco
searchBar.addEventListener("blur", function() {
    // Reduz a largura da barra de pesquisa ao seu tamanho original
    searchBar.style.width = "200px";
});

// Função para adicionar um produto ao carrinho
function addToCart(id, name, price) {
    // Obter o carrinho de compras do armazenamento local (ou criar um se ainda não existir)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar se o produto já está no carrinho
    let existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        // Se o produto já estiver no carrinho, aumentar a quantidade
        existingItem.quantity++;
    } else {
        // Se o produto ainda não estiver no carrinho, adicioná-lo
        cart.push({ id, name, price, quantity: 1 });
    }

    // Salvar o carrinho atualizado de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirecionar para a página do carrinho
    window.location.href = 'carrinho.html';
}
// Script.js

// Event listener para o botão de logout
document.getElementById("logout-button").addEventListener("click", function() {
    // Limpar os dados de sessão (exemplo)
    sessionStorage.clear();
    // Redirecionar para a página de login (exemplo)
    window.location.href = "login.html";
});
