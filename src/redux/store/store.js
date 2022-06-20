import { createStore } from "redux";
import rootReducer from "../reducers/reducer";

// On crée le store qui sera appelé dans le Provider de l'index.js
const store = createStore(rootReducer)

export default store;
