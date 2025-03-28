const btnAddBook = document.querySelector('#btnAddBook');
const library = document.querySelector('.library');
const myLibrary = [];
const colors = [['#9f86c0', '#231942'], ['#dda15e', '#bc6c25'], ['#1a659e', '#004e89'], ['#b23a48', '#461220']];

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

    palette = Math.floor(Math.random() * colors.length);
    container.style.backgroundColor = colors[palette][0];
    container.style.borderColor = colors[palette][1];        

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