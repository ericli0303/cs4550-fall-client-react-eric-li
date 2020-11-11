import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteWidget,
    createWidget,
    updateWidget,
    saveWidget
} from "../actions/widgetActions"


const WidgetHelperComponent = (
    { course, moduleId, lessonId, topicId, widgets = [], passedWidget,
        deleteWidget, createWidget, updateWidget, saveWidget }) =>

    <div class="">
        <h4>
            <span class="float-right">
                <a class="btn btn-warning" onClick={(event) => updateWidget({ ...passedWidget, widgetOrder: passedWidget.widgetOrder++})}>
                    <i class="fas fa-arrow-up"></i>
                </a>
                <a class="btn btn-warning" onClick={(event) => updateWidget({ ...passedWidget, widgetOrder: passedWidget.widgetOrder--})}>
                    <i class="fas fa-arrow-down"></i>
                </a>
                <select class="" value={passedWidget.type} onChange={(event) => updateWidget({ ...passedWidget, type: event.target.value, style: updateStyle(event.target.value) })}>
                    <option value="Heading">Heading</option>
                    <option value="Paragraph">Paragraph</option>
                    <option value="Image">Image</option>
                    <option value="List">List</option>
                </select>
                <button type="button" class="btn btn-success" onClick={() => saveWidget({ ...passedWidget, editing: false })}>Save</button>
                <a class="btn btn-danger" onClick={() => deleteWidget(passedWidget)}><i class="fa fa-times" aria-hidden="true"></i></a>
            </span>
        </h4>
    </div>

const updateStyle = (type) => {
    if(type === "Heading") {
        return "Heading 1"
    } else if(type === "List") {
        return "Unordered list"
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId,
    lessonId: state.topicReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: (topicId, widget) => createWidget(dispatch, topicId, widget),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    saveWidget: (widget) => saveWidget(dispatch, widget)
})

export default connect
    (stateToPropertyMapper,
        propertyToDispatchMapper)
    (WidgetHelperComponent)