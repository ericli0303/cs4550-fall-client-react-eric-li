import React from "react";
import courseService from "../services/CourseService";
import CourseListComponent from "./CourseListComponent";
import {BrowserRouter, Link, Route} from "react-router-dom";


class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }
    constructor(props) {
        super(props)
    }

    updateTitle =(event) => {
        const newTitle = event.target.value
        const course = {
            ...this.state.course
        }
        course.title = newTitle
        this.setState({
            course: course
        })
    }

    updateCourse = () => {
        this.setState({ editing: false })
        courseService.updateCourse(this.state.course._id, this.state.course)
    }
    render() {
        return (
            <tr>
                <td className="priority-1">
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.state.course._id}`}>
                            <i className="fas fa-file"></i>{this.state.course.title}
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
                    <td className="priority-2">
                        <button onClick={this.updateCourse}>
                            Save
                    </button>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-2">
                        <button onClick={() => this.setState({ editing: true })}>
                            Edit
                    </button>
                    </td>
                }
                {
                    !this.state.editing &&
                    <td className="priority-1">
                        <button onClick={() => this.props.deleteCourse(this.props.course)}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </td>
                }
            </tr>
        )
    }
}


export default CourseRowComponent