import CourseService from "../services/CourseService"

export const FIND_COURSE_BY_ID = "FIND_COURSE_BY_ID"

export const findCourseById = (dispatch, courseId) =>
    CourseService.findCourseById(courseId)
        .then(course => dispatch({
            type: FIND_COURSE_BY_ID,
            course
        }))

