const url2 = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses'
const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/courses'

export const findAllCourses = () =>
    fetch(url).then(response => response.json())

export const deleteCourse = (courseId) =>
    fetch(`${url}/${courseId}`, { method: "DELETE" })
        .then(response => response.json())

export const createCourse = (newCourse) =>
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newCourse),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export const updateCourse = (courseId, course) =>
    fetch(`${url}/${courseId}`, {
        method: "PUT",
        body: JSON.stringify(course),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse
}
