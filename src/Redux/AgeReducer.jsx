import { Add, Delete } from "./ActionTypes/Actions"


const AgeReducer = (state ={age:2000}, action) => {
    switch (action.type) {
        case Add:
            return { ...state, age: state.age + 1 }
        case Delete:
            return { ...state, age: state.age - 1 }
        default:
            return state
    }
}
export default AgeReducer