import { createStore, combineReducers } from 'redux';
import * as log from './log/reducer';

export interface State {
    log: log.State
}

export default createStore(combineReducers<State>({
    log: log.reducer
}))
