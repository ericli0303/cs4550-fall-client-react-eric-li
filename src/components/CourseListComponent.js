import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import courseService from "../services/CourseService";
import { act } from "react-dom/test-utils";

class CourseListComponent extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
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
    render() {
        return (
            <div>
                <h1>Course List</h1>
                <button onClick={this.createCourse}>Add Course</button>
                <div className="container content">
                    <table id="courses" className="table table-hover" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th className="priority-1" scope="col" width="45%">Title</th>
                                <th className="priority-3" scope="col" width="10%">Owned by</th>
                                <th className="priority-2" scope="col" width="15%">Last modified by me</th>
                                <th className="priority-2" scope="col" width="3%"><i className="fa fa-th-large" aria-hidden="true"></i></th>
                                <th className="priority-2" scope="col" width="3%"><i className="fa fa-arrow-up" aria-hidden="true"></i></th>
                                <th className="priority-1" scope="col" width="5%"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.courses.map(course =>
                                    <CourseRowComponent
                                        key={course._id}
                                        course={course}
                                        deleteCourse={this.deleteCourse} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default CourseListComponent