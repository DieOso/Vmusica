import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { getFirestore, reduxFirestore } from "redux-firestore";
import {
  getFirebase,
  reactReduxFirebase,
  firebaseReducer
} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./reducers/authReducer";
import AnuncioReducer from "./reducers/AnuncioReducer";
import fbConfig from "./config/fbConfig";

export default createStore(
  combineReducers({
    anuncios: AnuncioReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
  }),
  {},
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),
      promise()
    ),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      attachAuthIsReady: true,
      useFirestoreForProfile: true,
      userProfile: "users"
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
