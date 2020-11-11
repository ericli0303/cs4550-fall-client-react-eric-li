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


const ImageWidgetComponent = (
    { course, moduleId, lessonId, topicId, widgets = [], passedWidget,
        deleteWidget, createWidget, updateWidget, saveWidget }) =>

    <div class="container">
        <h4>
            Image Widget
        </h4>
        <WidgetHelperComponent passedWidget={passedWidget}/>
        <br />
        <br />


        <form>
            <div class="form-group row">
                <div class="col-sm">
                    <input class="form-control" value={passedWidget.value} id="heading" placeholder="paragraph" onChange={(event) => updateWidget({ ...passedWidget, value: event.target.value})}/>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm">
                    <input type="text" class="form-control"
                        placeholder="Widget name" value={passedWidget.name} onChange={(event) => updateWidget({ ...passedWidget, name: event.target.value })}/>
                </div>
            </div>

        </form>

        <h3>
            Preview
        </h3>
        <img src={passedWidget.value} alt="Widget Image">
        </img>

    </div>

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
    (ImageWidgetComponent)