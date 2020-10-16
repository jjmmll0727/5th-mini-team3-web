import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";


import { GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_SITES_REQUEST, GET_SITES_SUCCESS } from "../actions";

function getCategoryApi(token) {
  return axios.get(`/main/mypage/my_categories`, { headers: {
    'authorization' : token,
  }})
}

function getSitesApi(action) {

  return axios.get(`/main/mypage/user_category_site?category_id=${action.category}`, { headers: {
    'authorization': action.token
  }})
}

function* getSites(action) {
  try {
    console.log(action)
    const result = yield call(getSitesApi, action)
    yield put({
      type: GET_SITES_SUCCESS,
      data: result.data.my_category_sites
    })
  } catch (err) {
    yield put({
      type: GET_CATEGORY_FAILURE,
      error : err
    })
  }
}

function* getCategory(action) {
  try {
    const result = yield call(getCategoryApi, action.token)
    console.log(result.data)
    yield put({
      type: GET_CATEGORY_SUCCESS,
      data: result.data.user_categories
    })
  } catch (err) {
    yield put({
      type: GET_CATEGORY_FAILURE,
      error : err,
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
