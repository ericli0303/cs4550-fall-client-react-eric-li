import React from "react";
import "./CourseManagerContainer.css"
import CourseRowComponent from "../components/CourseRowComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent"
import courseService from "../services/CourseService";
import { act } from "react-dom/test-utils";

class CourseManagerContainer extends React.Component {
    state = {
        courses: [],
        title: "",
        isTable: true
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
                ],
                title: ""
            })))
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id).then(status =>
            this.setState(prevState => ({
                courses: prevState.courses.filter(c => c._id !== course._id)
            }))
        )
    }

    updateTitle = (course, number) => {
        console.log(course)
        const newCourses = {
            ...this.state.courses
        }
        console.log(newCourses)
        newCourses[number] = course
        this.setState({
            courses: 
                newCourses
        })
    }

    updateCourse = (courseId, course) => {
        courseService.updateCourse(courseId, course)
        .then(status => {
        this.setState(prevState => ({
            courses: prevState.courses.map(c => c._id === courseId?course: c)
        }))
    })
    }

    enterTitle = (event) => {
        const newTitle = event.target.value
        this.setState({
            title: newTitle
        })
    }

    changeDisplay = () => {
        this.setState(prevState => ({
            isTable: !prevState.isTable
        }))
    }

    render() {
        return (
            <div className="">
                {/* navbar */}
                <nav class="navbar sticky-top navbar-dark bg-primary">
                    <a class="navbar-brand "> <i class="fa fa-bars" aria-hidden="true"></i>  Course Manager</a>
                    <div class="input-group mb-3">
                        <input type="text" value={this.state.title} onChange={this.enterTitle} class="form-control" placeholder="New Course Title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
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
                {
                    this.state.isTable &&
                    <CourseTableComponent
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse} 
                    changeDisplay={this.changeDisplay}
                    updateTitle={this.updateTitle}/>
                }
                {
                    !this.state.isTable &&
                    <CourseGridComponent
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    updateCourse={this.updateCourse} 
                    changeDisplay={this.changeDisplay}
                    updateTitle={this.updateTitle}/>
                }

            </div>
        )
    }
}


export default CourseManagerContainer