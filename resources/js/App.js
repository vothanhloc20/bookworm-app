import * as React from 'react';
import Default from './layouts/Default.js';
import Router from './router/index.js';

class App extends React.Component {
    render() {
        return (
            <Default content={<Router />}/>
        )
    }
}

export default App;
