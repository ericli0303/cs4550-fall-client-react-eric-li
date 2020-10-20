import ModuleService from "../services/ModuleService"

export const DELETE_MODULE = "DELETE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE"
export const FIND_MODULE = "FIND_MODULE"



export const deleteModule = (dispatch, module) =>
    ModuleService.deleteModule(module._id)
        .then(status =>
            dispatch({
                type: DELETE_MODULE,
                module
            }))

export const createModule = (dispatch, course, module) =>
    ModuleService.createModule(course._id, module)
        .then(module =>
            dispatch({
                type: CREATE_MODULE,
                module
            }))

export const updateModule = (dispatch, module) =>
    ModuleService.updateModule(module._id, module)
        .then(status =>
            dispatch({
                type: UPDATE_MODULE,
                module
            }))

export const findModuleForCourse = (dispatch, courseId) =>
    ModuleService.findModulesForCourse(courseId)
        .then(modules => dispatch({
            type: FIND_MODULE_FOR_COURSE,
            modules
        }))

