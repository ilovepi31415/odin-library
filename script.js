const btnAddBook = document.querySelector('#btnAddBook');
const display = document.querySelector('#display');
const myLibrary = [];

btnAddBook.addEventListener('click', () => {
    addBookToLibrary();
    listBooks();
});

function Book(title) {
    this.title = title;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    let title = prompt('Title:');
    const book = new Book(title);
    myLibrary.push(book);
}

function listBooks() {
    let message  = '';
    for (book of myLibrary) {
        message += `${book.title} ${book.id}; `;
    }
    display.textContent = message;
}