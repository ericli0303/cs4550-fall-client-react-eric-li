import React from "react";
import courseService from "../services/CourseService";
import CourseTableContainer from "./CourseTableComponent";
import CourseCardComponent from "./CourseCardComponent"
import "./CourseGridComponent.css"
import { BrowserRouter, Link, Route } from "react-router-dom";


class CourseGridComponent extends React.Component {
    state = {
        courses: this.props.courses
    }
    constructor(props) {
        super(props)
        // console.log(props.courses)
    }

    render() {
        return (
            // <div class="card-columns card-deck">
            <div className="container content">
                <table id="courses" className="table table-hover" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th className="priority-1" scope="col" width="45%">Recent documents</th>
                            <th className="priority-3" scope="col" width="20%">Owned by me</th>
                            <th className="priority-2" scope="col" width="15%"></th>
                            <th className="priority-1" scope="col" width="3%">
                                <div onClick={this.props.changeDisplay}>
                                    <i class="fa fa-list-ul" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th className="priority-1" scope="col" width="3%"><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i></th>
                            <th className="priority-1" scope="col" width="3%"><i class="fa fa-folder" aria-hidden="true"></i></th>
                        </tr>
                    </thead>
                </table>
                {/* 
                <div class="card-columns"> */}
                <div className="row">
                    {
                        this.props.courses.map(course =>
                            <CourseCardComponent
                                key={course._id}
                                course={course}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                updateTitle={this.updateTitle} />
                        )
                    }
                </div>
            </div>
        )
    }
}


export default CourseGridComponent