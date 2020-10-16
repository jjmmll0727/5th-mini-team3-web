import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import { ADD_SITE_FAILURE, ADD_SITE_REQUEST, ADD_SITE_SUCCESS, PUT_CATEGORY_FAILURE, PUT_CATEGORY_REQUEST, PUT_CATEGORY_SUCCESS } from "../actions";
import axios from 'axios'


function putCategoryApi(action) {
    console.log(action)
    return axios.put(`/category/include`, { id: action.id }, { headers: {
        'authorization' : action.token,
      }
    })
}

function addSiteApi(action) {
    console.log(action)
    return axios.post(`/category/siteInfo/create`, action.data, { headers: {
        'authorization' : action.token,
      }
    })
}

function* putCategory(action) {
    try{
        const result = yield call(putCategoryApi, action)
        yield put({
            type: PUT_CATEGORY_SUCCESS,
        });
    } catch (err){
        yield put({ 
            type:PUT_CATEGORY_FAILURE,
            error: err.message
        })
    }
}

function* addSites(action) {
    try{
        const result = yield call(addSiteApi, action)
        yield put({
            type: ADD_SITE_SUCCESS,
        });
    } catch (err){
        yield put({ 
            type:ADD_SITE_FAILURE,
            error: err.message
        })
    }
}

function* watchPutCategory() {
    yield takeLatest(PUT_CATEGORY_REQUEST, putCategory)
}

function* watchAddSites() {
    yield takeLatest(ADD_SITE_REQUEST, addSites)
}

export default function* putDataSaga() {
    yield all([fork(watchPutCategory),fork(watchAddSites)]);
  }
  