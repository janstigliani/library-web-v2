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

    unsave(book) {
        localStorage.removeItem("preferred", JSON.stringify(book))
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

    isBookHere(book) {
        const preferredBooksString = localStorage.getItem("preferred");
        if(preferredBooksString) {
            const preferredBooks = JSON.parse(preferredBooksString);
           return preferredBooks.includes(book);
        } else {
            const preferredBooks = [];
            return preferredBooks.includes(book);
        }
        
    }
}

export default StorageService;