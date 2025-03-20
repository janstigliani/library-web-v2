import DisplayBooks from "./display-books-component";

class HomeComponent {

    constructor(service) {
        this.service = service;
    }

    async start() {

        const nextBtn = document.getElementById('nextP');
        nextBtn.addEventListener('click', () => this.nextPressed());

        const prevBtn = document.getElementById('previousP');
        prevBtn.addEventListener('click', () => this.previousPressed());

        this.books = await this.service.fetchedBookData();
        this.render(this.books);
    }

    render(books) {
        const container = document.querySelector('#main-container')
        container.innerHTML = ""

        for (let i = 0; i < books.length; i++) {
            const book = books[i];

            const displayBooks = new DisplayBooks(book);
            const bookCard = displayBooks.render();

            container.appendChild(bookCard);
        }
    }

    async nextPressed() {
        this.service.nextPage();
        const data = await this.service.fetchedBookData();
        this.render(data);
    }

    async previousPressed() {
        this.service.previousPage();
        const data = await this.service.fetchedBookData();
        this.render(data);
    }
}
export default HomeComponent