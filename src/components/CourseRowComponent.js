import React from "react";
import courseService from "../services/CourseService";
import CourseTableComponent from "./CourseTableComponent";
import { BrowserRouter, Link, Route } from "react-router-dom";


class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course,
        color: ""
    }
    constructor(props) {
        super(props)
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = {
            ...this.state.course
        }
        course.title = newTitle
        this.setState({
            course: course
        })
        // this.props.updateTitle(course)
    }

    updateCourse = () => {
        this.setState({ editing: false })
        this.props.updateCourse(this.state.course._id, this.state.course)
    }

    changeColor = () => {
        this.setState({
            color: "aquamarine"
        })
    }

    render() {
        return (
            <tr className="course-row" style={{ backgroundColor: this.state.color }} onClick={this.changeColor}>
                <td className="priority-1">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.course._id}`}>
                            <i class="fa fa-file-text" aria-hidden="true"></i> {this.state.course.title}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.course.title} />
                    }
                </td>
                <td className="priority-3">{this.props.course.owner}</td>
                <td className="priority-2">{this.props.course.lastUpdated}</td>
                <td className="priority-2"></td>
                {
                    this.state.editing &&
                    <td className="priority-1">
                        <button onClick={this.updateCourse}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-1">
                        <i className="fa fa-pencil" onClick={() => this.setState({ editing: true })} aria-hidden="true"></i>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-1">
                        <i class="fa fa-trash" onClick={() => this.props.deleteCourse(this.props.course)} aria-hidden="true"></i>
                    </td>
                }
            </tr>
        )
    }
}


export default CourseRowComponent