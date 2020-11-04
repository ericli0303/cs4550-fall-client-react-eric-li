import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
  deleteModule,
  createModule,
  updateModule
} from "../actions/moduleActions"

const ModuleListComponent = (
  { course, modules = [],
  deleteModule, createModule, updateModule}) =>

  <div class="container col-4">
    <ul class="list-group">
      {
        
        modules.map(module =>
          
          <li key={module._id} class="list-group-item list-group-item-action">
            {
              module.editing &&
              <span>
                <input value={module.title} onChange={(event) => updateModule({...module, title: event.target.value})}/>
                <button onClick={() => updateModule({...module, editing:false})}>
                  Ok
                </button>
              </span>
            }
            {
              !module.editing &&
              <span>
                <Link to={`/edit/${course._id}/modules/${module._id}`}>
                  {module.title}
                </Link>
                <button onClick={() => updateModule({...module, editing:true})}>
                  Edit
                </button>
              </span>
            }
            <i class="fa fa-times float-right"
              aria-hidden="true"
              onClick={() => deleteModule(module)}></i>
          </li>)
      }
      <br />
      <br />
      <form class="form-inline my-2 my-lg-0 right-pad-20">
        <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-page" onClick={() => createModule(course, {title: "New Module"})} type="button">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    </ul>
  </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => deleteModule(dispatch, module),
  createModule: (course, module) => createModule(dispatch, course, module),
  updateModule: (module) => updateModule(dispatch, module)
})

export default connect
  (stateToPropertyMapper,
  propertyToDispatchMapper)
  (ModuleListComponent)