import { Dispatch, Middleware, MiddlewareAPI, Store } from 'redux';
import { Action } from 'redux-actions';
import { append } from '../log/actions';

const middleware =  <S>({dispatch}: MiddlewareAPI<S>) => {
    const url = "ws://" + location.host + "/socket";
    let socket = new WebSocket(url);

    socket.onmessage = ({data}) => {
        let payload = JSON.parse(data)
        dispatch(append(payload.id, payload.name, payload.text))
    }

    return (next: Dispatch<S>) => <A>(action: Action<A>): Action<A> => {
        switch(action.type) {
            case "WEBSOCKET_SEND":
                socket.send(JSON.stringify(action.payload))
            default:
                return next(action);
        }
    }
}

export default middleware
