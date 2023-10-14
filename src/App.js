import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import myStore from "./store/store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;

// npm i redux, npm i react-redux

// npm i reduxjs/toolkit

// store
// reducer
// actions

// Redux = Context + useReducer

// Redux - is used as centralized store to maintain all data and their functionalities in the application, ( mainly avoiding data to be handled in the component.)

// create a reducer function for each data
// combine all the reducer with key: value using combineReducers
// export those reducers in the name of allReducer

// Create a store using allReducers
// Store provide using Provider from react-redux
// Store consume by useSelector from 'react-redux'

// to throw action or to trigger reducer - useDispatch() from 'react-redux'

//Additional point, if needed maintain all your actions in a separate folder and call them wherever needed.
