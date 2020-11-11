import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import WidgetHelperComponent from "./WidgetHelperComponent"
import {
    deleteWidget,
    createWidget,
    updateWidget,
    saveWidget
} from "../actions/widgetActions"


const ListWidgetComponent = (
    { course, moduleId, lessonId, topicId, widgets = [], passedWidget,
        deleteWidget, createWidget, updateWidget, saveWidget }) =>

    <div class="container">
        <h4>
            List widget
        </h4>

        <WidgetHelperComponent passedWidget={passedWidget} />

        <br />
        <br />


        <form>
            <div class="form-group row">
                <div class="col-sm">
                    <textarea class="form-control" rows="4" value={passedWidget.value} id="list" placeholder="Enter each row on a new line" onChange={(event) => updateWidget({ ...passedWidget, value: event.target.value })} />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm">
                    <select class="form-control" value={passedWidget.style} onChange={(event) => updateWidget({ ...passedWidget, style: event.target.value })}>
                        <option value="Unordered list">Unordered list 1</option>
                        <option value="Ordered list">Ordered list 2</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm">
                    <input type="text" class="form-control" value={passedWidget.name}
                        placeholder="Widget name" onChange={(event) => updateWidget({ ...passedWidget, name: event.target.value })} />
                </div>
            </div>

        </form>

        <h3>
            Preview
        </h3>
        {
            passedWidget.style === "Unordered list" &&
            <ul>
                {
                    breakString(passedWidget.value).map(line =>
                        <li>
                            {line}
                        </li>
                    )
                }
            </ul>
        }
        {
            passedWidget.style === "Ordered list" &&
            <ol>
                {
                    breakString(passedWidget.value).map(line =>
                        <li>
                            {line}
                        </li>
                    )
                }
            </ol>
        }

    </div>

const breakString = (text) =>
{
    if(text === null) {
        return [];
    }
    else {
        return text.split("\n");
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
    (ListWidgetComponent)