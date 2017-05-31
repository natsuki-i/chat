import { createAction } from 'redux-actions';
import { Message } from './reducer';

export const append = createAction<Message, number, string, string>(
    "APPEND_LOG",
    (id: number, name: string, text: string) => (
        {id, name, text}
    )
)
