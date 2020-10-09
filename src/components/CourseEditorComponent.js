import { buildQueries } from "@testing-library/react";
import React from "react";
import {findCourseById} from "../services/CourseService";
import LessonTabsComponent from "./LessonTabsComponent";

export class CourseEditor extends React.Component {
    state ={
        course:{
            _id:"",
            title:""
        },
        lessons:[
            "Build",
            "Pages",
            "Theme",
            "Store",
            "App",
            "Setting"
        ],
        modules:[
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5",
            "Module 6",
            "Module 7",
            "+"
        ],
        topics:[
            "Topic",
            "Topic",
            "Topic",
            "Topic",
            "+"
        ]
    }

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
                <LessonTabsComponent
                lessons={this.state.lessons}/>
            </div>
        )
    }

}
