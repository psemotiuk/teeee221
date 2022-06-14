import {all, takeLatest, takeEvery, put, call, fork} from "redux-saga/effects";
import {GameActionTypes, IGame} from "../../types/gameTypes";
import {fetchGamesFail, fetchGamesRequest, fetchGamesSuccess} from "../actions/gameAction";
import {callApi} from "../../helpers/callApi";
import {endpoints} from "../../helpers/constants";


function* fetchGamesSaga() {
    try {
        const response: Array<IGame> = yield call(callApi, endpoints.game.getAll, 'GET')
        console.log('response321321', response)
        yield put(fetchGamesSuccess(response))
        localStorage.setItem('games', JSON.stringify(response))
    } catch (e: any) {
        console.log('errorInCatch', e)
        yield put(fetchGamesFail(e.message))
    }
}

export function* fetchGames() {
    yield takeEvery(GameActionTypes.FETCH_GAMES, fetchGamesSaga)
}

export function* gamesSaga() {
    yield all([fork(fetchGames)])
}
