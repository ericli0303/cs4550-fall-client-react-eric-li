import React from "react";

export class CourseEditor extends React.Component {
    componentDidMount(){
        console.log(this.props)
        const courseId = this.props.match.params.courseId
    }
    render() {
        return (
            <div>

            </div>
        )
    }

}
