import {
    FetchGamesFailAction,
    FetchGamesSuccessAction,
    GameActionTypes,
    IGame,
    IGameAction
} from "../../types/gameTypes";


export const fetchGamesRequest = (): IGameAction<void> => ({
    type: GameActionTypes.FETCH_GAMES
})

export const fetchGamesSuccess = (payload: Array<IGame>): FetchGamesSuccessAction => {
    console.log('payload',payload)
    return {
        type: GameActionTypes.FETCH_GAMES_SUCCESS,
        payload,
    }
}

export const fetchGamesFail = (error: string): FetchGamesFailAction => ({
    type: GameActionTypes.FETCH_GAMES_FAIL,
    payload: error
})

