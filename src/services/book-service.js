class BookService {

    static BASE_URL = 'https://gutendex.com/books';
    static URL_ID = '?ids=';

    constructor(page = 1) {
        this.page = page;
    }

    async fetchedBookData() {

        const params = new URLSearchParams(window.location.search);
        const topic = params.get('topic');

        const search = params.get("search");

        const url = BookService.BASE_URL + `?page=${this.page}` + `&search=${search}` + `&topic=${topic}`;

        const data = await fetch(url)
                           .then(res => res.json());

        this.bookCount = data.count

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

        if (this.page > this.bookCount/32) {
            this.page = 1;
        } else {
            this.page++;
        }
    }

    previousPage() {

        if (this.page < 2) {
            this.page = Math.floor(this.bookCount/32)+1;
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