import React from "react";

const TopicPillsComponent = ({ lessons }) =>
  <div class="col-8">
    <ul class="nav nav-pills">
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
        <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-pill" type="submit">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    </ul>
  </div>

export default TopicPillsComponent