import { buildQueries } from "@testing-library/react";
import "./CourseEditorComponent.css"
import React from "react";
import {findCourseById} from "../services/CourseService";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";

export class CourseEditorComponent extends React.Component {
    componentDidMount(){
        console.log(this.props)
        const courseId = this.props.match.params.courseId
        findCourseById(courseId).then(
            actualCourse => this.setState({course: actualCourse})
        )
    }
    render() {
        return (
            <div>
                <LessonTabsComponent/>
                <div class="row">
                    <ModuleListComponent/>
                    <TopicPillsComponent/>
                </div>
            </div>
        )
    }

}
