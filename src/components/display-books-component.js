class DisplayBooks {

    constructor(book, storage, isPreferred = false) {
        this.book = book;
        this.storage = storage;
        this.isPreferred = isPreferred;
    }

    render() {
        const container = document.createElement("div");
        container.classList.add("ext-cont");

        const bookContainer = document.createElement('a');
        bookContainer.href = `./detail.html?id=${this.book.id}`;

        const divImg = document.createElement("div");
        divImg.classList.add("div-img");

        const bookImage = document.createElement('img');
        bookImage.src = this.book.formats['image/jpeg'];
        bookImage.classList.add('book_image');

        const title = document.createElement('h3');
        title.classList.add("book-title")
        const node = document.createTextNode(this.book.title);
        title.appendChild(node);

        const prefButton = document.createElement('button');
        prefButton.classList.add("preferred")
        const star = document.createElement("img")
        star.classList.add("star");
        
        if(!this.isPreferred) {
            star.src="https://cdn0.iconfinder.com/data/icons/glyphpack/67/star-empty-512.png"
            prefButton.addEventListener("click", () => this.saveStarredBook(this.book));
        } else {
            star.src="https://www.svgrepo.com/show/360794/star-full.svg"
            prefButton.addEventListener("click", () => this.unsaveStarredBook(this.book));
        }

        prefButton.appendChild(star);

        divImg.appendChild(bookImage);
        bookContainer.appendChild(divImg);
        bookContainer.appendChild(title);

        container.appendChild(bookContainer);
        container.appendChild(prefButton);

        return container;
    }

    saveStarredBook(book) {
        this.storage.save(book);
    }

}
export default DisplayBooks