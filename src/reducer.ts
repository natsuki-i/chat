import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as log from './log/reducer';
import socket from './socket/middleware';

export interface State {
    log: log.State
}

export default createStore(combineReducers<State>({
    log: log.reducer,
    form: formReducer,
}), applyMiddleware(socket))
