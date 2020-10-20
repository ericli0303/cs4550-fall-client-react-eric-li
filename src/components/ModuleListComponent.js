import React from "react";
import { connect } from "react-redux";

const ModuleListComponent = ({ modules = [], deleteModule, createModule, updateModule}) =>

  <div class="container col-4">
    <ul class="list-group">
      {
        modules.map(module =>
          <li class="list-group-item">
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
                {module.title}
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
        <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-page" onClick={createModule} type="submit">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    </ul>
  </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => dispatch({
    type: "DELETE_MODULE",
    module
  }),
  createModule: () => dispatch({
    type: "CREATE_MODULE",

  }),
  updateModule: (module) => dispatch({
    type: "UPDATE_MODULE",
    module
  })
})

export default connect
  (stateToPropertyMapper,
  propertyToDispatchMapper)
  (ModuleListComponent)