import DisplayBooks from "./components/display-books-component";
import DetailPageComponent from "./components/detail-page-component";
import BookService from "./services/book-service";


const service = new BookService();
const detailPageC = new DetailPageComponent(service);
detailPageC.start();