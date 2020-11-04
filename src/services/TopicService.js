const lesurl = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/lessons'
const topurl = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/topics'

export const findTopic = (topicId) =>
    fetch(`${topurl}/${topicId}`).then(response => response.json())


export const findTopicsForLesson = (lessonId) =>
    fetch(`${lesurl}/${lessonId}/topics`, {
        method: "GET"
    })
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${topurl}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const createTopic = (lessonId, topic) => {
debugger
    return fetch(`${lesurl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}


export const updateTopic = (topicId, topic) =>
    fetch(`${topurl}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findTopic,
    findTopicsForLesson,
    deleteTopic,
    createTopic,
    updateTopic
}
