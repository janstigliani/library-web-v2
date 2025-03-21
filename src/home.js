import BookService from "./services/book-service.js";
import HomeComponent from "./components/home-page-component.js";
import StorageService from "./services/storage-service.js";

const bService = new BookService();
const bStorage = new StorageService();
const homePageComponent = new HomeComponent(bService, bStorage);

// bService.fetchedBookData().then(data => console.log(data));

homePageComponent.start();