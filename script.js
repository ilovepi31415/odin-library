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
    let btnX = document.createElement('button');
    btnX.classList.add('btnX');
    btnX.textContent = 'x';


    container.dataset.id = book.id;
    titleBox.textContent = book.title;

    container.appendChild(titleBox);
    container.appendChild(btnX);
    library.appendChild(container);
}