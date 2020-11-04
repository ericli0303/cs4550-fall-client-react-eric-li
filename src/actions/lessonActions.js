import LessonService from "../services/LessonService"

export const DELETE_LESSON = "DELETE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE"
export const FIND_LESSON = "FIND_LESSON"



export const deleteLesson = (dispatch, lesson) =>
    LessonService.deleteLesson(lesson._id)
        .then(status =>
            dispatch({
                type: DELETE_LESSON,
                lesson
            }))

export const createLesson = (dispatch, moduleId, lesson) =>
    {
        debugger
        LessonService.createLesson(moduleId, lesson)
        .then(actualLesson =>
            dispatch({
                type: CREATE_LESSON,
                lesson: actualLesson
            }))
            
        }
export const updateLesson = (dispatch, lesson) =>
    LessonService.updateLesson(lesson._id, lesson)
        .then(status =>
            dispatch({
                type: UPDATE_LESSON,
                lesson
            }))

export const findLessonsForModule = (dispatch, moduleId) =>
{
    LessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: FIND_LESSON_FOR_MODULE,
            lessons,
            moduleId
        }))
    }

export const findLesson = (dispatch, lessonId) =>
    LessonService.findLesson(lessonId)
        .then(lesson => dispatch({
            type: FIND_LESSON,
            lessonId
        }))

