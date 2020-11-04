import WidgetService from "../services/WidgetService"

export const DELETE_WIDGET = "DELETE_WIDGET"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGET_FOR_TOPIC = "FIND_WIDGET_FOR_TOPIC"
export const FIND_WIDGET = "FIND_WIDGET"


export const findWidget = (dispatch, widgetId) =>
    WidgetService.findWidget(widgetId)
        .then(widget =>
            dispatch({
                type: FIND_WIDGET,
                widgetId
            }))

export const deleteWidget = (dispatch, widget) => {
    debugger
    return WidgetService.deleteWidget(widget.id)
        .then(status =>
            dispatch({
                type: DELETE_WIDGET,
                widget
            }))
}

export const createWidget = (dispatch, topicId, widget) => {
    debugger
    return WidgetService.createWidget(topicId, widget)
        .then(actualWidget =>
            dispatch({
                type: CREATE_WIDGET,
                widget: actualWidget
            }))
}

export const updateWidget = (dispatch, widget) => {
    dispatch({
        type: UPDATE_WIDGET,
        widget
    })
}

export const saveWidget = (dispatch, widget) => {
    debugger
    WidgetService.updateWidget(widget.id, widget)
        .then(status =>
            dispatch({
                type: UPDATE_WIDGET,
                widget
            }))
}


export const findWidgetForTopic = (dispatch, topicId) => {
    debugger
    return WidgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_WIDGET_FOR_TOPIC,
            widgets,
            topicId
        }))
}
