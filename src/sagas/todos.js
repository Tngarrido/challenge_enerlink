import API from "services/api";
import { call, put, race, delay, takeEvery } from 'redux-saga/effects';
import { todosTypes } from "actions/todos";
import runDefaultSaga from "./default";
import { sendAlert } from "actions/todos";

const TodoIndexRequest = () => API.get('/todos');

function* TodoIndexSuccessCallback(result, response) {
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    yield put({ type: todosTypes.INDEX_IN_SUCCESS, result, response });
  }
}

function* TodoIndexFailureCallback() {
  yield put({
    type: todosTypes.INDEX_IN_FAILURE
  });
}

export function* todoIndex(action) {
  yield runDefaultSaga(
    { request: TodoIndexRequest, params: action.params, algo: 'a' },
    TodoIndexSuccessCallback,
    TodoIndexFailureCallback
  );
}

const TodoPatchRequest = params => API.patch(`/todos/${params.id}`, params);

function* TodoPatchSuccessCallback(result, response) {
    if (result.errors) {
      throw new Error(result.errors.join('\n'));
    } else {
      yield put({ type: todosTypes.PATCH_IN_SUCCESS, result, response });
    }
  }
  
function* TodoPatchFailureCallback() {
    yield put(sendAlert({
        kind: 'error'
      }));
    yield put({
      type: todosTypes.PATCH_IN_FAILURE
    });
}
  
export function* todoPatch(action) {
    yield runDefaultSaga(
      { request: TodoPatchRequest, params: action.params },
      TodoPatchSuccessCallback,
      TodoPatchFailureCallback
    );
}


const TodoPostRequest = params => API.post('/todos', params);

function* TodoPostSuccessCallback(result, response) {
    if (result.errors) {
      throw new Error(result.errors.join('\n'));
    } else {
      yield put({ type: todosTypes.POST_IN_SUCCESS, result, response });
    }
  }
  
function* TodoPostFailureCallback() {
    yield put(sendAlert({
        kind: 'error'
      }));
    yield put({
      type: todosTypes.POST_IN_FAILURE
    });
}
  
export function* todoPost(action) {
    yield runDefaultSaga(
      { request: TodoPostRequest, params: action.params },
      TodoPostSuccessCallback,
      TodoPostFailureCallback
    );
}

const TodoDeleteRequest = params => API.delete(`/todos/${params.id}`);

function* TodoDeleteSuccessCallback(result, response, params) {
    if (result.errors) {
      throw new Error(result.errors.join('\n'));
    } else {
      yield put({ type: todosTypes.DELETE_IN_SUCCESS, result, response, params });
    }
  }
  
function* TodoDeleteFailureCallback() {
    yield put(sendAlert({
        kind: 'error'
      }));
    yield put({
      type: todosTypes.DELETE_IN_FAILURE
    });
}
  
export function* todoDelete(action) {
    yield runDefaultSaga(
      { request: TodoDeleteRequest, params: action.params },
      TodoDeleteSuccessCallback,
      TodoDeleteFailureCallback
    );
}


export default function* todosSagas() {
    yield takeEvery(todosTypes.INDEX_IN_REQUEST, todoIndex);
    yield takeEvery(todosTypes.PATCH_IN_REQUEST, todoPatch);
    yield takeEvery(todosTypes.POST_IN_REQUEST, todoPost);
    yield takeEvery(todosTypes.DELETE_IN_REQUEST, todoDelete);
  }