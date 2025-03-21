class StorageService {
    constructor(){

    }

    save(book) {
        const preferredBooksString = localStorage.getItem("preferred");

        if(preferredBooksString) {
            const preferredBooks = JSON.parse(preferredBooksString);
            preferredBooks.push(book);
            localStorage.setItem("preferred", JSON.stringify(preferredBooks));
        } else {
            const preferredBooks = [];
            preferredBooks.push(book);
            localStorage.setItem("preferred", JSON.stringify(preferredBooks));
        }
    }

    getPreferredBook() {
        const preferredBooksString = localStorage.getItem("preferred");

        if(preferredBooksString) {
            const preferredBooks = JSON.parse(preferredBooksString);
           return preferredBooks;
        } else {
            const preferredBooks = [];
            return preferredBooks;
        }
    }
}

export default StorageService;