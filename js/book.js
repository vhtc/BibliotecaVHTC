const libraryList = document.getElementById('library-list');
const filterSelect = document.getElementById('filter-select');
let allBooks = [];

function loadBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(books => {
            allBooks = books;
            displayBooks(allBooks);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayBooks(books) {
    libraryList.innerHTML = '';
    books.forEach(book => {
        const listItem = document.createElement('li');

        const statusClass = book.status.toLowerCase() === 'lendo' ? 'status-lendo' : (book.status.toLowerCase() === 'não lido' ? 'status-nao-lido' : book.status.toLowerCase() === 'lido' ? 'status-lido' : book.status.toLowerCase() === 'quero' ? 'status-quero' : '');

        // Adicione um link para a página de detalhes do livro
        listItem.innerHTML = `
                    <a class="book-link" href="book-details.html?id=${book.id}">
                        <img src="${book.coverUrl}" alt="Capa do Livro" class="book-cover">
                        <div>
                            <h2>${book.title}</h2>
                            <p><strong>Autor:</strong> ${book.author}</p>
                            <p><strong>Gênero:</strong> ${book.genre}</p>
                            <p><strong>Tipo:</strong> ${book.type}</p>
                            <p class="${statusClass}"><strong>Status:</strong> ${book.status}</p>
                            <p><strong>Ano:</strong> ${book.year}</p>
                            <p><strong>Páginas:</strong> ${book.pages}</p>
                            <p><strong>Box:</strong> ${book.box}</p>
                        </div>
                    </a>
                `;
        libraryList.appendChild(listItem);
    });
}

window.addEventListener("load", loadBooks);

filterSelect.addEventListener("change", function () {
    filterBooks(filterSelect.value);
});

function filterBooks(filterType) {
    if (filterType === 'all') {
        displayBooks(allBooks);
    } else if (filterType === 'lido') {
        const filteredBooks = allBooks.filter(book => book.status.toLowerCase() === filterType);
        displayBooks(filteredBooks);
    }
    else if (filterType === 'não lido') {
        const filteredBooks = allBooks.filter(book => book.status.toLowerCase() === filterType);
        displayBooks(filteredBooks);
    }
    else if (filterType === 'quero') {
        const filteredBooks = allBooks.filter(book => book.status.toLowerCase() === filterType);
        displayBooks(filteredBooks);
    }
    else if (filterType === 'lendo') {
        const filteredBooks = allBooks.filter(book => book.status.toLowerCase() === filterType);
        displayBooks(filteredBooks);
    } else if (filterType === 'emprestado') {
        const filteredBooks = allBooks.filter(book => book.status.toLowerCase() === filterType);
        displayBooks(filteredBooks);
    }
    else {
        const filteredBooks = allBooks.filter(book => book.type.toLowerCase() === filterType);
        displayBooks(filteredBooks);
    }
}
