  import React from "react";

const LessonTabsComponent = ({lessons}) =>
<h2>
<ul class="nav nav-tabs navbar-dark bg-dark">
    <a class="wbdv-title" href="#">Course Editor</a>
    


    <li class="nav-item">
        <a href="#" class="nav-link">Build</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link active">Pages</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Theme</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Store</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">App</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Settings</a>
    </li>
    <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-page" type="submit">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
    </form>
</ul>
</h2>
export default LessonTabsComponent