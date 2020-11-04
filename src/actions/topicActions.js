import TopicService from "../services/TopicService"

export const DELETE_TOPIC = "DELETE_TOPIC"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const FIND_TOPIC_FOR_LESSON = "FIND_TOPIC_FOR_LESSON"
export const FIND_TOPIC = "FIND_TOPIC"


export const findTopic = (dispatch, topicId) =>
    TopicService.findTopic(topicId)
        .then(topic =>
            dispatch({
                type: FIND_TOPIC,
                topicId
            }))

export const deleteTopic = (dispatch, topic) =>
    TopicService.deleteTopic(topic._id)
        .then(status =>
            dispatch({
                type: DELETE_TOPIC,
                topic
            }))

export const createTopic = (dispatch, lessonId, topic) =>
    TopicService.createTopic(lessonId, topic)
        .then(actualTopic =>
            dispatch({
                type: CREATE_TOPIC,
                topic: actualTopic
            }))

export const updateTopic = (dispatch, topic) =>
    TopicService.updateTopic(topic._id, topic)
        .then(status =>
            dispatch({
                type: UPDATE_TOPIC,
                topic
            }))

export const findTopicForLesson = (dispatch, lessonId) =>

    TopicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPIC_FOR_LESSON,
            topics,
            lessonId
        }))

