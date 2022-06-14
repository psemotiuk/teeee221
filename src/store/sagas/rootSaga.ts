import { all, fork } from 'redux-saga/effects'
import {gamesSaga} from "./gameSaga";

export function* rootSaga() {
    yield all([fork(gamesSaga)])
}

