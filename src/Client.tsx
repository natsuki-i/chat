import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Log from './Log';
import Input from './Input';

const muiTheme = getMuiTheme({
    userAgent: 'all',
});

const messages = [
    {id: 1, name: "hello", text: "world"}
]

const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    messages.push({id: messages.length+1, name: "hoge", text: "fuga"});
    render();
}

function App() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Log messages={messages}></Log>
                <Input onSubmit={handler}/>
            </div>
        </MuiThemeProvider>
    );
}


function render() {
    if (typeof document !== 'undefined') {
        ReactDOM.render(
            <App />,
            document.getElementById("main")
        );
    }
}
render();
