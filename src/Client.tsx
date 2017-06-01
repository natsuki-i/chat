import 'babel-polyfill';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Log from './log/Log';
import Input from './input/Input';
import store from './reducer';

const muiTheme = getMuiTheme({
    userAgent: 'all',
});

function App() {
    return (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Log />
                    <Input />
                </div>
            </MuiThemeProvider>
        </Provider>
    );
}


if (typeof document !== 'undefined') {
    injectTapEventPlugin();
    render(
        <App />,
        document.getElementById("main")
    );
}

