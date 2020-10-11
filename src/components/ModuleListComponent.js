import React from "react";

const ModuleListComponent = ({ }) =>

  <div class="container col-4">
    <ul class="list-group">
      <li class="list-group-item">Module 1 <i class="fa fa-times float-right" aria-hidden="true"></i></li>
      <li class="list-group-item">Module 2 <i class="fa fa-times float-right" aria-hidden="true"></i></li>
      <li class="list-group-item active">Module 3 <i class="fa fa-times float-right"
        aria-hidden="true"></i></li>
      <li class="list-group-item">Module 4 <i class="fa fa-times float-right" aria-hidden="true"></i></li>
      <li class="list-group-item">Module 5 <i class="fa fa-times float-right" aria-hidden="true"></i></li>
      <li class="list-group-item">Module 6 <i class="fa fa-times float-right" aria-hidden="true"></i></li>
      <li class="list-group-item">Module 7 <i class="fa fa-times float-right" aria-hidden="true"></i></li>
      <br />
      <br />
      <form class="form-inline my-2 my-lg-0 right-pad-20">
        <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-page" type="submit">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    </ul>
  </div>

export default ModuleListComponent