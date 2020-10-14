import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import courseService from "../services/CourseService";
import { act } from "react-dom/test-utils";

class CourseTableComponent extends React.Component {
    state = {
        courses: this.props.courses
    }
    constructor(props) {
        super(props)
        // console.log(props.courses)
    }

    // deleteCourse = (course) => {
    //     courseService.deleteCourse(course._id).then(status =>
    //         this.setState(prevState => ({
    //             courses: prevState.courses.filter(c => c._id !== course._id)
    //         }))
    //     )
    // }
    render() {
        return (
            <div className="container content">
                <table id="courses" className="table table-hover" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th className="priority-1" scope="col" width="45%">Title</th>
                            <th className="priority-3" scope="col" width="15%">Owned by</th>
                            <th className="priority-2" scope="col" width="25%">Last modified</th>
                            <th className="priority-1" scope="col" width="3%">
                                <div onClick={this.props.changeDisplay}>
                                    <i className="fa fa-th-large" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th className="priority-1" scope="col" width="3%"><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i></th>
                            <th className="priority-1" scope="col" width="5%"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.courses.map(course =>
                                <CourseRowComponent
                                    key={course._id}
                                    course={course}
                                    deleteCourse={this.props.deleteCourse}
                                    updateCourse={this.props.updateCourse} 
                                    updateTitle={this.props.updateTitle}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default CourseTableComponent