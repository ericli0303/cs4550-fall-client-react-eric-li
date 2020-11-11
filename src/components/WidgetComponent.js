import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import {
    deleteWidget,
    createWidget,
    updateWidget,
    saveWidget
} from "../actions/widgetActions"
import ImageWidgetComponent from "./ImageWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";


const WidgetComponent = (
    { course, moduleId, lessonId, topicId, widgets = [],
        deleteWidget, createWidget, updateWidget, saveWidget}) =>

    <div class="">
        <ul class="list">
            <h5 class="">
                    Preview
                    <label class="switch">
                    <input type="checkbox" id="switchValue"/>
                    <span class="slider round"></span>
                </label>
            </h5>
            {
                widgets.map(widget =>
                    <div class="border">
                        {
                            widget.type === "Heading" &&
                            <HeadingWidgetComponent passedWidget={widget}/>
                        }
                        {
                            widget.type === "Paragraph" &&
                            <ParagraphWidgetComponent passedWidget={widget} />
                        }
                        {
                            widget.type === "Image" &&
                            <ImageWidgetComponent passedWidget={widget} />
                        }
                        {
                            widget.type === "List" &&
                            <ListWidgetComponent passedWidget={widget} />
                        }
                    </div>
                )
            }
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-pill" onClick={() => createWidget(topicId, { name: "New Widget", topicId: topicId, type: "Heading", style: "Heading 1" })} type="button">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </form>
        </ul>
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
    (WidgetComponent)