import DisplayBooks from "./display-books-component.js"

class StarredPageComponent {
    constructor(storage) {
        this.storage = storage;
    }

    async start() {
        this.books = await this.storage.getPreferredBook();
        console.log(this.books);
        this.render(this.books)
    }

    render(books) {
        const container = document.querySelector('#main-container')
        container.innerHTML = ""

        for (let i = 0; i < books.length; i++) {
            const book = books[i];

            const displayBooks = new DisplayBooks(book, this.storage);
            const bookCard = displayBooks.render();

            container.appendChild(bookCard);
        }
    }
}

export default StarredPageComponent