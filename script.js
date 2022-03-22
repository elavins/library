/*
*
*/

// Create form element and add event listeners

const ui = document.querySelector('#ui');
const form = document.createElement('div');

form.classList.add('form');
form.innerHTML = '<div class="form-head">NEW BOOK <span class="close">[X]</span></div>';
form.innerHTML += `<form action="example.com/path" method="post">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="...">
                    <br>
                    <label for="author">Author:</label>
                    <input type="text" id="author" name="author" placeholder="...">
                    <br>
                    <label for="pages">Pages:</label>
                    <input type="number" id="pages" name="pages"></input>
                    <br>
                    <label for="read">Finished reading?</label>
                    <input type="checkbox" id="read" name="read" value="Read"></input>
                    <br>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>              
                </form>`


const addBtn = document.querySelector('#add-book');
addBtn.addEventListener('click', () => {
    ui.appendChild(form);
    document.querySelector('.close').addEventListener('click', () => ui.removeChild(form));
});

// Library object

class Library {
    constructor() { this.books = [] }

    addBook(aBook) {
        this.books.push(aBook);
        this.printCard(this.books.length - 1);
    }

    printCard(i) {
        let newBook = document.createElement("div");
        let removeBtn = document.createElement("span");
        removeBtn.className = 'close-card';
        removeBtn.innerText = '[X]';
        removeBtn.addEventListener('click', () => {
            this.removeBook(i);
        });
        newBook.className = 'card';
        newBook.setAttribute('data-index', i);
        newBook.innerText = this.books[i].info;
        newBook.prepend(removeBtn);
        container.appendChild(newBook);
    }

    removeBook(i) {
        this.books.splice(i, 1);
        let toRemove = document.querySelector(`[data-index='${i}'`);
        container.removeChild(toRemove);
    }

    /*print() {
        for (let i in this.books) {
            this.printCard(i);
        }
    }*/
}

// Book object

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get info() {
        return `Title: ${this.title}
                Author: ${this.author}
                ${this.pages} pages
                ${this.read ? 'not read yet' : 'finished reading'}`
    }
}

// Create and print a library with some test books

const library = new Library();
const a = new Book('The Hobbit','Tolkien','39999',true);
const b = new Book('Th234t','bbbb','1222',true);
const c = new Book('The Hoeeeeeeebbit','eeeee','99',false);
const d = new Book('The ','eeeee','99',false);


const container = document.querySelector('#container');
library.addBook(a);
library.addBook(b);
library.addBook(c);
library.addBook(d);
library.addBook(c);


library.print();