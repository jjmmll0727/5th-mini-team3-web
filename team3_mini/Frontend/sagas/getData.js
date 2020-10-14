import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";
import { useSelector } from 'react-redux'

import { GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_SITES_REQUEST, GET_SITES_SUCCESS } from "../actions";

function getCategoryApi() {
  const { me } = useSelector(state => state.user.me)
  return axios.get(`/main/mypage/my_categories`, { headers: {
    'authorization' : me,
  }})
}

function getSitesApi(data) {
  return axios.get(`/main/mypage/user_category_site?category_id=${data}`, null, { headers: {
    authorization: `${readCookie("authorization")}`
  }})
}

function* getSites(action) {
  try {
    const result = yield call(getSitesApi, action.data)
    yield put({
      type: GET_SITES_SUCCESS,
      data: result.data
    })
  } catch (err) {
    yield put({
      type: GET_CATEGORY_FAILURE,
      error : err.response.data,
    })
  }
}

function* getCategory(action) {
  try {
    const result = yield call(getCategoryApi, action.data)
    
    yield put({
      type: GET_CATEGORY_SUCCESS,
      data: result.data.user_categories
    })
  } catch (err) {
    yield put({
      type: GET_CATEGORY_FAILURE,
      error : err.response.data,
    })
  }
}

function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY_REQUEST, getCategory)
}

function* watchGetSites() {
  yield takeLatest(GET_SITES_REQUEST, getSites)
}

export default function* getDataSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetSites)
  ]);
}
