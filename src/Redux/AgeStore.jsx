import { createStore } from "redux";
import AgeReducer from "./AgeReducer";


const AgeStore = createStore(AgeReducer)

export default AgeStore;