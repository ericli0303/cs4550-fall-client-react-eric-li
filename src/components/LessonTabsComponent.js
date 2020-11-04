import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteLesson,
    createLesson,
    updateLesson
} from "../actions/lessonActions"

const LessonTabsComponent = ({ lessons = [], moduleId, course, deleteLesson, createLesson, updateLesson }) =>
    <div>
        <ul class="nav nav-tabs navbar-dark bg-dark">
            {
                lessons.map(lesson =>
                    <li key={lesson._id} class="nav-item">
                        {
                            lesson.editing &&
                            <span>
                                <input value={lesson.title} onChange={(event) => updateLesson({ ...lesson, title: event.target.value })} />
                                <button onClick={() => updateLesson({ ...lesson, editing: false })}>
                                    Ok
                                </button>
                            </span>
                        }
                        {
                            !lesson.editing &&
                            <span>
                                <Link class="nav-link" to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                                    {lesson.title}
                                </Link>
                                <button onClick={() => updateLesson({ ...lesson, editing: true })}>
                                    Edit
                                </button>
                            </span>
                        }
                        <span class="">
                            <i class="fa fa-times"
                                aria-hidden="true"
                                onClick={() => deleteLesson(lesson)}></i>
                        </span>
                    </li>
                )
            }
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-page"
                    onClick={() => { createLesson(moduleId, { title: "New" }) }} type="button">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </form>
        </ul>
    </div>
// export default LessonTabsComponent

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (moduleId, lesson) => createLesson(dispatch, moduleId, lesson),
    updateLesson: (lesson) => updateLesson(dispatch, lesson)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (LessonTabsComponent)