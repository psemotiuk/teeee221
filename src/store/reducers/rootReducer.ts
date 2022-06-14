import {combineReducers} from "redux";
import {gameReducer} from "./gameReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    games: gameReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer





