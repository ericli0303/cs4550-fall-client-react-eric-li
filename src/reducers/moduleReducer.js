import {
    DELETE_MODULE,
    CREATE_MODULE,
    UPDATE_MODULE,
    FIND_MODULE,
    FIND_MODULE_FOR_COURSE

  } from "../actions/moduleActions"

const initialState = {
    modules: [],
    moduleId:{}
}


const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            return {
                ...state,
                modules: [...state.modules, action.module]
            }
        case FIND_MODULE_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }
        case FIND_MODULE:
            return {
                ...state,
                moduleId: action.module
            }
        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
            }
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module._id !== action.module._id)
            }
        default:
            return state
    }
}

export default moduleReducer
