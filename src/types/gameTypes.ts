import {Action} from "redux";

export interface GamesState {
    loading: boolean;
    error: null | string;
    games?: IGame[]
}

export enum GameActionTypes {
    FETCH_GAMES = 'FETCH_GAMES',
    FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS',
    FETCH_GAMES_FAIL = 'FETCH_GAMES_FAIL'
}

export interface FetchGamesAction {
    type: GameActionTypes.FETCH_GAMES;
}

export interface FetchGamesSuccessAction {
    type: GameActionTypes.FETCH_GAMES_SUCCESS,
    payload: Array<IGame>
}

export interface FetchGamesFailAction {
    type: GameActionTypes.FETCH_GAMES_FAIL
    payload: string
}

export type GameAction = FetchGamesAction | FetchGamesSuccessAction | FetchGamesFailAction

export interface IGameAction<T> extends Action<string> {
    type: string;
    payload?: T;
}


export interface IGame {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}
