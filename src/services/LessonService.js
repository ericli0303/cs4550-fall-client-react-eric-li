const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/modules'
const lesurl = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/lessons'

export const findLesson = (lessonId) =>
    fetch(`${lesurl}/${lessonId}`).then(response => response.json())


export const findLessonsForModule = (moduleId) =>
    fetch(`${url}/${moduleId}/lessons`, {
        method: "GET"
    })
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${lesurl}/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const createLesson = (moduleId, lesson) =>

    fetch(`${url}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${lesurl}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findLesson,
    findLessonsForModule,
    deleteLesson,
    createLesson,
    updateLesson
}
