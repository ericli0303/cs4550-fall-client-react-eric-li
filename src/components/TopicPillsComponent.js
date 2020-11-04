import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
  deleteTopic,
  createTopic,
  updateTopic
} from "../actions/topicActions"


const TopicPillsComponent = (
  { course, moduleId, lessonId, topics = [],
    deleteTopic, createTopic, updateTopic }) =>

  <div class="">
    <ul className="nav nav-pills">
      {

        topics.map(topic =>

          <li key={topic._id} className="nav-item">
            {
              topic.editing &&
              <span>
                <input value={topic.title} onChange={(event) => updateTopic({ ...topic, title: event.target.value })} />
                <button onClick={() => updateTopic({ ...topic, editing: false })}>
                  Ok
                </button>
              </span>
            }
            {
              !topic.editing &&
              <span>
                <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                  {topic.title}
                </Link>
                <button onClick={() => updateTopic({ ...topic, editing: true })}>
                  Edit
                </button>
              </span>
            }
            <i class="fa fa-times float-right"
              aria-hidden="true"
              onClick={() => deleteTopic(topic)}></i>
          </li>)
      }
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0 wbdv-add-pill" onClick={() => createTopic(lessonId, { title: "New Topic" })} type="button">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    </ul>
  </div>

const stateToPropertyMapper = (state) => ({
  topics: state.topicReducer.topics,
  lessonId: state.topicReducer.lessonId,
  moduleId: state.lessonReducer.moduleId,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteTopic: (topic) => deleteTopic(dispatch, topic),
  createTopic: (lessonId, topic) => createTopic(dispatch, lessonId, topic),
  updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect
  (stateToPropertyMapper,
    propertyToDispatchMapper)
  (TopicPillsComponent)