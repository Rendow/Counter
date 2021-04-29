import {applyMiddleware,combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {thirdCounterReducer} from "./thirdCounter-reducer";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    counter: counterReducer,
    thirdCounter:thirdCounterReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer,applyMiddleware(thunk))

export default store