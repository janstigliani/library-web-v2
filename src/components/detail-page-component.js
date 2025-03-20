import DisplayBooks from "./display-books-component";

class DetailPageComponent {

    constructor(service) {
        this.service = service;
    }

    async start() {

        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const book = await this.service.fetchBookById(id);

        this.render(book);
    }

    render(book) {

        const container = document.querySelector('#main-container-detail');

        const displayBooks = new DisplayBooks(book);
        const bookCard = displayBooks.render();
        const summary = document.createElement('p');
        const node = document.createTextNode(book.summaries[0]);
        summary.appendChild(node);

        container.appendChild(bookCard);
        container.appendChild(summary);
    }
}
export default DetailPageComponent