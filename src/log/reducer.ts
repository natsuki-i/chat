import { handleActions, Action } from 'redux-actions';

export interface Message {
    readonly id?: number
    readonly name: string
    readonly text: string
}

export type State = Message[]

const initialState: State = [];

export const reducer = handleActions<State, Message>({
    ["APPEND_LOG"]: (state: State, action: Action<Message>): State => {
        return [...state, action.payload];
    }
}, initialState);
