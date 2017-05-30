import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    return (
        <h1>hello, world</h1>
    );
}


if (typeof document !== 'undefined') {
    ReactDOM.render(
        <App />,
        document.getElementById("main")
    );
}
