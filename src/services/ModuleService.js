const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/courses2'
const modurl = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/modules'

export const findModule = (moduleId) =>
    fetch(url).then(response => response.json())


export const findModulesForCourse = (courseId) =>
    fetch(`${url}/${courseId}/modules`, {
        method: "GET"
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${modurl}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(`${url}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export const updateModule = (moduleId, module) =>
    fetch(`${modurl}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findModule,
    findModulesForCourse,
    deleteModule,
    createModule,
    updateModule
}
