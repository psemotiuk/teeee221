import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas/rootSaga";
import {fetchGames} from "./sagas/gameSaga";


const sagaMiddleware = createSagaMiddleware()


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(fetchGames)

export default store
