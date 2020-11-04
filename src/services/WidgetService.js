const topurl = 'https://limitless-fortress-34579.herokuapp.com/api/topics'
const widurl = 'https://limitless-fortress-34579.herokuapp.com/api/widgets'

export const findWidget = (widgetId) =>
    fetch(`${widurl}/${widgetId}`).then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    fetch(`${topurl}/${topicId}/widgets`, {
        method: "GET"
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${widurl}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const createWidget = (topicId, widget) => {
    debugger
    return fetch(`${topurl}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}



export const updateWidget = (widgetId, widget) =>
    fetch(`${widurl}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findWidget,
    findWidgetsForTopic,
    deleteWidget,
    createWidget,
    updateWidget
}
