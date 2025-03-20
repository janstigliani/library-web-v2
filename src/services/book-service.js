class BookService {

    static BASE_URL = 'https://gutendex.com/books';
    static URL_ID = '?ids=';

    constructor(page = 1) {
        this.page = page;
    }

    async fetchedBookData() {

        const url = BookService.BASE_URL + `?page=${this.page}`;

        const data = await fetch(url)
                           .then(res => res.json());

        const results = await data.results;

        return results;
    }

    async fetchBookById(id) {

        const url = BookService.BASE_URL + BookService.URL_ID + id;

        const data = await fetch(url)
                                .then(res => res.json());

        return data.results[0];
    }

    nextPage() {

        if (this.page > 2358) {
            this.page = 1;
        } else {
            this.page++;
        }

    }

    previousPage() {

        if (this.page < 2) {
            this.page = 2359;
        } else {
            this.page--;
        }

    }

    // async nextPage(books) {

    //     const url = books.next;

    //     const data = await fetch(url)
    //                        .then(res => res.json());

    //     return data;

    // }

    // async previousPage(books) {

    //     const url = books.previous;

    //     const data = await fetch(url)
    //                        .then(res => res.json());

    //     return data;

    // }
}

export default BookService