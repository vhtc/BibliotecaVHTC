 // Extrair o ID do livro dos parâmetros da URL
 const urlParams = new URLSearchParams(window.location.search);
 const bookId = urlParams.get('id');

 // Encontrar o livro com base no ID
 fetch('books.json')
     .then(response => response.json())
     .then(books => {
         const book = books.find(item => item.id === bookId);
         if (book) {
             // Preencher os detalhes do livro
             document.getElementById('book-title').textContent = book.title;
             document.getElementById('book-cover').src = book.coverUrl;
             document.getElementById('book-author').textContent = 'Autor: ' + book.author;
             document.getElementById('book-genre').textContent = 'Gênero: ' + book.genre;
             document.getElementById('book-type').textContent = 'Tipo: ' + book.type;
             document.getElementById('book-status').textContent = 'Status: ' + book.status;
             document.getElementById('book-year').textContent = 'Ano: ' + book.year;
             document.getElementById('book-description').textContent = 'Descrição: ' + book.description;

         }
     });