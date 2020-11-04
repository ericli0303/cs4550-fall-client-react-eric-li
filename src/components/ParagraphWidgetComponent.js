import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    deleteWidget,
    createWidget,
    updateWidget,
    saveWidget
} from "../actions/widgetActions"


const ParagraphWidgetComponent = (
    { course, moduleId, lessonId, topicId, widgets = [], passedWidget,
        deleteWidget, createWidget, updateWidget, saveWidget }) =>

    <div class="container">
        <h4>
            Paragraph Widget
                    <span class="float-right">
                <a class="btn btn-warning" onClick={(event) => updateWidget({ ...passedWidget, widgetOrder: passedWidget.widgetOrder++})}>
                    <i class="fas fa-arrow-up"></i>
                </a>
                <a class="btn btn-warning" onClick={(event) => updateWidget({ ...passedWidget, widgetOrder: passedWidget.widgetOrder--})}>
                    <i class="fas fa-arrow-down"></i>
                </a>
                <select class="" value={passedWidget.type} onChange={(event) => updateWidget({ ...passedWidget, type: event.target.value})}>
                    <option value="Heading">Heading</option>
                    <option value="Paragraph">Paragraph</option>
                </select>
                <button type="button" class="btn btn-success" onClick={() => saveWidget({ ...passedWidget, editing: false })}>Save</button>
                <a class="btn btn-danger" onClick={() => deleteWidget(passedWidget)}><i class="fa fa-times" aria-hidden="true"></i></a>
            </span>
        </h4>

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
        <p>
            {passedWidget.value}
        </p>

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
    (ParagraphWidgetComponent)