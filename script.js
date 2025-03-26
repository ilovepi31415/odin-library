const btnAddBook = document.querySelector('#btnAddBook');
const library = document.querySelector('.library');
const myLibrary = [];

btnAddBook.addEventListener('click', () => {
    addBookToLibrary();
});

function Book(title) {
    this.title = title;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    let title = prompt('Title:');
    let book = new Book(title);
    myLibrary.push(book);
    displayNewBook(book);
}

function displayNewBook(book) {
    let container = document.createElement('div');
    container.classList.add('book');
    let titleBox = document.createElement('div');
    let btnX = document.createElement('img');
    btnX.classList.add('btnX');
    btnX.addEventListener('click', () => {
        deleteBook(book.id);
    });


    container.dataset.id = book.id;
    titleBox.textContent = book.title;

    container.appendChild(titleBox);
    container.appendChild(btnX);
    library.appendChild(container);
}

function deleteBook(id) {
    badBook = document.querySelector('[data-id=' + CSS.escape(id) + ']');
    library.removeChild(badBook);
}