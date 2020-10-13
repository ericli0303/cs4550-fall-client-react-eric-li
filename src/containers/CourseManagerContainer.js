import React from "react";
import "./CourseManagerContainer.css"
import CourseRowComponent from "../components/CourseRowComponent";
import CourseTableContainer from "./CourseTableContainer";
import courseService from "../services/CourseService";
import { act } from "react-dom/test-utils";

class CourseManagerContainer extends React.Component {
    state = {
        courses: [],
        title: ""
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
            title: this.state.title,
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

    enterTitle = (event) => {
        const newTitle = event.target.value
        this.setState({
            title: newTitle
        })
    }

    render() {
        return (
            <div className="">
                {/* navbar */}
                <nav class="navbar sticky-top navbar-dark bg-primary">
                    <a class="navbar-brand "> <i class="fa fa-bars" aria-hidden="true"></i>  Course Manager</a>
                    <div class="input-group mb-3">
                        <input type="text" onChange={this.enterTitle} class="form-control" placeholder="New Course Title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-success" onClick={this.createCourse} type="button"><i className="fa fa-plus-circle"
                            aria-hidden="true"></i></button>
                        </div>
                    </div>
                    {/* <form class="col-sm-6 float-left">
                        <input className="" onChange={this.enterTitle} type="text" size="20" placeholder="New Course Title" aria-label="Search" />
                        <button onClick={this.createCourse} className="btn btn-outline-success my-2 my-sm-0" type="button"><i className="fa fa-plus-circle"
                            aria-hidden="true"></i></button>
                    </form> */}
                </nav>
                <CourseTableContainer
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse} />

            </div>
        )
    }
}


export default CourseManagerContainer