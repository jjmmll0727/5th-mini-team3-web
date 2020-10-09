import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";
import shortid from 'shortid';
import faker from 'faker';

import { GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_SITES_REQUEST, GET_SITES_SUCCESS } from "../actions";

function getCategoryApi(data) {
  return axios.get(`/main/mypage/my_categories`)
}

function getSitesApi(data) {
  return axios.get(`/main/mypage/user_category_site?category_id=${data}`)
}

function* getSites(action) {
  try {
    const cardDataDummy = Array(faker.random.number(5))
      .fill(0) 
      .map(() => ({
        id: shortid.generate(), 
        title: faker.name.findName(), 
        imgsrc: faker.image.image(510, 136),
        content: Array(faker.random.number(3)).fill(0).map(() => (
          faker.lorem.sentence()
        )),
        href: faker.internet.url() 
      }));
    // const result = yield call(getSitesApi, action.data)
    yield put({
      type: GET_SITES_SUCCESS,
      data: cardDataDummy
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
    // const result = yield call(getCategoryApi, action.data)
    const DummyMenu = ["ALL", "과제발표", "논문", "디자인", "쇼핑", "여행", "추가"]
    yield put({
      type: GET_CATEGORY_SUCCESS,
      data: DummyMenu
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

export default function* postSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetSites)
  ]);
}
