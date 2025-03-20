import BookService from "./services/book-service.js";
import HomeComponent from "./components/home-page-component.js";
import DisplayBooks from "./components/display-books-component.js";

const bService = new BookService();
const homePageComponent = new HomeComponent(bService);

// bService.fetchedBookData().then(data => console.log(data));

homePageComponent.start();