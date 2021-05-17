import { userReducer } from './userReducer';
import { combineReducers } from "redux";
import { todoReducer } from './todoReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>