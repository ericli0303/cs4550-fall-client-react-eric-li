import {
    DELETE_WIDGET,
    CREATE_WIDGET,
    UPDATE_WIDGET,
    FIND_WIDGET_FOR_TOPIC,
    FIND_WIDGET

  } from "../actions/widgetActions"

const initialState = {
    widgets: [],
    widgetId:{}
}


const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            debugger
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }
        case FIND_WIDGET_FOR_TOPIC:
            debugger
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case FIND_WIDGET:
            return {
                ...state,
                widgetId: action.widgetId
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }
        default:
            return state
    }
}

export default widgetReducer
