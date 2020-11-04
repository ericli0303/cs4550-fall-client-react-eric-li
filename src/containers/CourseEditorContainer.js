import { buildQueries } from "@testing-library/react";
import "./CourseEditorContainer.css";
import React from "react";
import { connect } from "react-redux";
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";
import LessonTabsComponent from "../components/LessonTabsComponent";
import ModuleListComponent from "../components/ModuleListComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import { findModuleForCourse } from "../actions/moduleActions";
import { findModule } from "../actions/moduleActions";
import { findCourseById } from "../actions/courseActions";
import { findLessonsForModule } from "../actions/lessonActions";
import { findLesson } from "../actions/lessonActions"
import { findTopicsForLesson } from "../services/TopicService";
import { findTopicForLesson } from "../actions/topicActions";
import { findTopic } from "../actions/topicActions";
import { findWidgetForTopic} from "../actions/widgetActions"
import WidgetComponent from "../components/WidgetComponent";


class CourseEditorContainer extends React.Component {
    componentDidMount() {
        console.log(this.props)
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if (moduleId) {
            this.props.findModuleById(moduleId)
            this.props.findLessonsForModule(moduleId)
        }
        if (lessonId) {
            this.props.findLessonById(lessonId)
            this.props.findTopicsForLesson(lessonId)
        }
        if (topicId) {
            this.props.findTopicById(topicId)
            this.props.findWidgetsForTopic(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const previousModuleId = prevProps.match.params.moduleId
        if (moduleId !== previousModuleId) {
            this.props.findLessonsForModule(moduleId)
        }
        const lessonId = this.props.match.params.lessonId
        const previousLessonId = prevProps.match.params.lessonId
        if (lessonId !== previousLessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        const topicId = this.props.match.params.topicId
        console.log(topicId);
        const previousTopicId = prevProps.match.params.topicId
        if (topicId !== previousTopicId) {
            this.props.findWidgetsForTopic(topicId)
        }
    }

    render() {
        return (
            <div>
                <h2>
                <a class="wbdv-title" href="#">Course Editor</a>
                </h2>
                <div class="row">
                    <ModuleListComponent />
                    <div className="col-8">
                        <LessonTabsComponent />
                        <TopicPillsComponent />
                        <WidgetComponent />
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({
    findModulesForCourse: (courseId) => findModuleForCourse(dispatch, courseId),
    findCourseById: (courseId) => findCourseById(dispatch, courseId),
    findModuleById: (moduleId) => findModule(dispatch, moduleId),
    findLessonsForModule: (moduleId) => findLessonsForModule(dispatch, moduleId),
    findLessonById: (lessonId) => findLesson(dispatch, lessonId),
    findTopicsForLesson: (lessonId) => findTopicForLesson(dispatch, lessonId),
    findWidgetsForTopic: (topicId) => findWidgetForTopic(dispatch, topicId),
    findTopicById: (topicId) => findTopic(dispatch, topicId),
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (CourseEditorContainer)
