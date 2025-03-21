import StorageService from "./services/storage-service.js";
import StarredPageComponent from "./components/starred-page-component.js";

const storage = new StorageService();
const starredC = new StarredPageComponent(storage);

starredC.start() ;