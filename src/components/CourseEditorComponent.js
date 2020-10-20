import { buildQueries } from "@testing-library/react";
import "./CourseEditorComponent.css";
import React from "react";
import { connect } from "react-redux";
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import { findModuleForCourse } from "../actions/moduleActions";
import { findCourseById } from "../actions/courseActions";

class CourseEditorComponent extends React.Component {
    componentDidMount() {
        console.log(this.props)
        const courseId = this.props.match.params.courseId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
    }
    render() {
        return (
            <div>
                <LessonTabsComponent />
                <div class="row">
                    <ModuleListComponent />
                    <TopicPillsComponent />
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({
    findModulesForCourse: (courseId) => findModuleForCourse(dispatch, courseId),
    findCourseById: (courseId) => findCourseById(dispatch, courseId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (CourseEditorComponent)
