import React from "react";
import HelloReduxExampleComponent                   // import component that consumes data
    from "./hello-redux-example-component";
import hello from "./reducers/hello";               // import reducer that calculates/generates data
import todos from "./reducers/todos-reducer";       // import new reducer
import {configureStore} from '@reduxjs/toolkit';    // replace createStore to store data from reducers
import {Provider} from "react-redux";               // import Provider which will deliver data
import Todos from "./todos-component";              // import new component to render todos
const store = configureStore({              // each available through these namespaces
    reducer: {hello, todos}
});



const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};

export default ReduxExamples;