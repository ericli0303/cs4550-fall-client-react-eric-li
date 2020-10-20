import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.css"
// import "@fortawesome/fontawesome-free/css/all.min.css"
import "font-awesome/css/font-awesome.min.css"
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import * as serviceWorker from './serviceWorker';
import CourseTableContainer from './components/CourseTableComponent';
import CourseManagerContainer from './containers/CourseManagerContainer';
import { CourseEditorComponent } from './components/CourseEditorComponent';
import HomeComponent from "./components/HomeComponent";
import moduleReducer from "./reducers/moduleReducer"

const rootReducer = combineReducers({
  moduleReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Link to="/courses">Courses</Link> */}
      <Route path="/" exact component={HomeComponent}/>
      <Route path="/courses" exact component={CourseManagerContainer}/>
      <Route path="/edit/:courseId" exact component={CourseEditorComponent}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
