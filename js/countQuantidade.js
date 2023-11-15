// Carregar o JSON a partir do arquivo
fetch('books.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
})
.then(jsonData => {
    var quantidadeItens, quantidadeHqs, quantidadeLivros, quantidadeMangas, quantidadeLidos, quantidadeNlidos, quantidadeQueros, quantidadeLendos, quantidadeEmprestados;

    // Contar o número de HQs
    quantidadeItens = jsonData.length;
    quantidadeHqs = jsonData.filter(item => item.type === 'HQ' && item.status !== 'Quero').length;
    quantidadeLivros = jsonData.filter(item => item.type === 'Livro' && item.status !== 'Quero').length;
    quantidadeMangas = jsonData.filter(item => item.type === 'Mangá' && item.status !== 'Quero').length;
    quantidadeLidos = jsonData.filter(item => item.status === 'Lido' && item.status !== 'Quero').length;
    quantidadeNlidos = jsonData.filter(item => item.status === 'Não Lido' && item.status !== 'Quero').length;
    quantidadeLendos = jsonData.filter(item => item.status === 'Lendo' && item.status !== 'Quero').length;
    quantidadeEmprestados = jsonData.filter(item => item.status === 'Emprestado' && item.status !== 'Quero').length;
    quantidadeQueros = jsonData.filter(item => item.status === 'Quero').length;

    // Exibir a contagem na página HTML
    document.getElementById('contagem-itens').textContent = 'Total: ' + (quantidadeItens-quantidadeQueros);
    document.getElementById('contagem-livro').textContent = 'Livros: ' + quantidadeLivros;
    document.getElementById('contagem-hq').textContent = 'HQs: ' + quantidadeHqs;
    document.getElementById('contagem-manga').textContent = 'Mangás: ' +quantidadeMangas;
    document.getElementById('contagem-lido').textContent = 'Lidos: ' +quantidadeLidos;
    document.getElementById('contagem-nlido').textContent = 'Não Lidos: ' +quantidadeNlidos;
    document.getElementById('contagem-lendo').textContent = 'Lendo: ' +quantidadeLendos;
    document.getElementById('contagem-emprestado').textContent = 'Emprestado: ' +quantidadeEmprestados;
    document.getElementById('contagem-quero').textContent = 'Comprar: ' +quantidadeQueros;
})
.catch(error => console.error('Erro:', error));