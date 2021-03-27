import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export const rootReducer = combineReducers({
    counter: counterReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)



export default store