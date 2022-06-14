import {GameAction, GameActionTypes, GamesState} from "../../types/gameTypes";

const initialState: GamesState = {
    loading: false,
    error: null,
    games: []
}

export const gameReducer = (state = initialState, action: GameAction): GamesState => {
    switch (action.type) {
        case GameActionTypes.FETCH_GAMES_SUCCESS: {
            console.log('action', state)
            return {loading: false, error: null, games: action.payload}
        }

        case GameActionTypes.FETCH_GAMES_FAIL:
            console.log('action', state)
            return {loading: false, error: action.payload}
        default:
            return state
    }

}
