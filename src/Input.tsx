import * as React from 'react';
import TextField from 'material-ui/TextField';

interface Props {
    readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
}

export default function Input(props: Props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextField
                hintText="message"
                fullWidth={true}
        />
    </form>
    );
}
