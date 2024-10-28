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
             document.getElementById('book-author').innerHTML = '<strong>Autor: </strong>' + book.author;
             document.getElementById('book-genre').innerHTML = '<strong>Gênero: </strong>' + book.genre;
            //  document.getElementById('book-type').textContent = 'Tipo: ' + book.type;
             document.getElementById('book-type').innerHTML = '<strong>Tipo: </strong>' + book.type;
             document.getElementById('book-status').innerHTML = '<strong>Status: </strong>' + book.status;
             document.getElementById('book-year').innerHTML = '<strong>Ano: </strong>' + book.year;
             document.getElementById('book-description').innerHTML = '<strong>Descrição: </strong>' + book.description;

         }
     });