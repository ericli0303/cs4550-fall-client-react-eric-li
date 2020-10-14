import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const HomeComponent = ({ }) =>

    <div class="container col-4">
        <Link to={`/courses`}>
            <h3 class="">Courses</h3>
        </Link>
    </div>

export default HomeComponent