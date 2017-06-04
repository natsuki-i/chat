import { createAction } from 'redux-actions';

export const send = createAction<{name: string, text: string}, string, string>(
    "WEBSOCKET_SEND",
    (name: string, text: string) => ({name, text})
)
