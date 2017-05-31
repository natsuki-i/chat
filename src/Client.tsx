import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Log from './log/Log';
import { append as appendLog } from './log/actions';
import Input from './Input';
import store from './reducer';

const muiTheme = getMuiTheme({
    userAgent: 'all',
});

const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.dispatch(appendLog(store.getState().log.length, "hello", "world"));
}

function App() {
    return (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Log></Log>
                    <Input onSubmit={handler}/>
                </div>
            </MuiThemeProvider>
        </Provider>
    );
}


if (typeof document !== 'undefined') {
    render(
        <App />,
        document.getElementById("main")
    );
}

