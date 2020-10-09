import React from "react";
import CourseRowComponent from "../components/CourseRowComponent";
import CourseTableContainer from "./CourseTableContainer";
import courseService from "../services/CourseService";
import { act } from "react-dom/test-utils";

class CourseManagerContainer extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
        console.log(this.state.courses)
    }

    createCourse = () => {
        const newCourse = {
            title: 'New Course',
            owner: 'me',
            lastUpdated: 'today'
        }
        console.log(newCourse)

        courseService.createCourse(newCourse).then(actualCourse =>
            this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id).then(status =>
            this.setState(prevState => ({
                courses: prevState.courses.filter(c => c._id !== course._id)
            }))
        )
    }

    updateCourse = (courseId, course) => {
        courseService.updateCourse(courseId, course)
    }

    render() {
        return (
            <div>
                <h1>Course List</h1>
                <button onClick={this.createCourse}>Add Course</button>
                <CourseTableContainer
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse} 
                    updateCourse={this.updateCourse}/>

            </div>
        )
    }
}


export default CourseManagerContainer