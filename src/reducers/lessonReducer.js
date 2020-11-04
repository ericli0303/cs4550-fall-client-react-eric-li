import {
    DELETE_LESSON,
    CREATE_LESSON,
    UPDATE_LESSON,
    FIND_LESSON,
    FIND_LESSON_FOR_MODULE

  } from "../actions/lessonActions"

const initialState = {
    lessons: [],
    lessonId: {}
}


const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [...state.lessons, action.lesson]
            }
        case FIND_LESSON_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        case FIND_LESSON:
            return {
                ...state,
                lessonId: action.lessonId
            }
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id ? action.lesson : lesson)
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lesson._id)
            }
        default:
            return state
    }
}

export default lessonReducer
