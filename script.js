const btnAddBook = document.querySelector('#btnAddBook');
const library = document.querySelector('.library');
const dialog = document.querySelector('.modal');
const form = document.querySelector('#my-form');
const myLibrary = [];
const colors = [['#9f86c0', '#231942'], ['#dda15e', '#bc6c25'], ['#1a659e', '#004e89'], ['#b23a48', '#461220']];

btnAddBook.addEventListener('click', () => {
    dialog.showModal();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#been-read').checked;

    dialog.close();
    addBookToLibrary(title, author, pages, read);
});

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayNewBook(book);
}

function displayNewBook(book) {
    let container = document.createElement('div');
    container.classList.add('book');

    // All main content declarations
    let content = document.createElement('div');
    content.classList.add('content');
    let titleBox = document.createElement('div');
    titleBox.classList.add('title');
    let authorBox = document.createElement('div');
    authorBox.classList.add('author');
    let pagesBox = document.createElement('div');
    pagesBox.classList.add('pages');
    let readBox = document.createElement('div');
    
    // Button declarations and click functions
    let buttons = document.createElement('div');
    buttons.classList.add('buttonContainer')
    let btnRead = document.createElement('img');
    btnRead.classList.add('btnRead');
    btnRead.addEventListener('click', () => {
        book.read = !book.read;
        readBox.textContent = book.read ? 'Read' : 'Not read'; 
    });
    let btnX = document.createElement('img');
    btnX.classList.add('btnX');
    btnX.addEventListener('click', () => {
        deleteBook(book.id);
    });

    // Creates the variety of colors in the books
    palette = Math.floor(Math.random() * colors.length);
    container.style.backgroundColor = colors[palette][0];
    container.style.borderColor = colors[palette][1];        

    // Populates the book with info
    container.dataset.id = book.id;
    titleBox.textContent = book.title;
    authorBox.textContent = `by ${book.author}`;
    pagesBox.textContent = `${book.pages} pages`;
    readBox.textContent = book.read ? 'Read' : 'Not read'; 

    container.appendChild(content);
    content.appendChild(titleBox);
    content.appendChild(authorBox);
    content.appendChild(pagesBox);
    content.appendChild(readBox);
    container.appendChild(buttons);
    buttons.appendChild(btnRead);
    buttons.appendChild(btnX);
    library.appendChild(container);
}

function deleteBook(id) {
    badBook = document.querySelector('[data-id=' + CSS.escape(id) + ']');
    library.removeChild(badBook);
}