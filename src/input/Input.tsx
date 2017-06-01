import * as React from 'react';
import { Field, FormProps, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { append as appendLog } from '../log/actions';

interface Message {
    message: string
}

interface Props extends FormProps<Message, Props, Message> {
}

function Input(props: Props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="message" component={renderTextField} label="Message" />
    </form>
    );
}

const renderTextField = (props: any) => {
    return <TextField
        hintText={props.label}
        floatingLabelText={props.label}
        errorText={props.touched && props.error}
        fullWidth={true}
        {...props.input}
        {...props.costom}
        />
}

export default reduxForm<Message, Props, Message>({
    form: 'input',
    onSubmit: (values, dispatch, props) => dispatch(appendLog(null, "no name", values.message)),
    onSubmitSuccess: (result, dispatch, props) => props.reset(),
})(Input)
