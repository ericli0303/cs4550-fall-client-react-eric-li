import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"
import App from './App';
import {BrowserRouter, Link, Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import CourseTableContainer from './containers/CourseTableContainer';
import CourseManagerContainer from './containers/CourseManagerContainer';
import { CourseEditorComponent } from './components/CourseEditorComponent';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    {/* <Link to="/courses">Courses</Link> */}
    


    <Route path="/courses" exact component={CourseManagerContainer}/>
    <Route path="/edit/:courseId" exact component={CourseEditorComponent}/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
