import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import { PUT_CATEGORY_FAILURE, PUT_CATEGORY_REQUEST, PUT_CATEGORY_SUCCESS } from "../actions";
import axios from 'axios'


function putCategoryApi(id) {
    return axios.get(`/main/category/include`, id, { headers: {
        'authorization' : me,
      }})
}

function* putCategory(action) {
    try{
        const result = yield call(putCategoryApi, action.id)
        yield put({
            type: PUT_CATEGORY_SUCCESS,
        });
    } catch (err){
        yield put({ 
            type:PUT_CATEGORY_FAILURE,
            error: err.response.data
        })
    }
}

function* watchPutCategory() {
    yield takeLatest(PUT_CATEGORY_REQUEST, putCategory)
}

export default function* putDataSaga() {
    yield all([fork(watchPutCategory)]);
  }
  