import { all, fork } from "redux-saga/effects";
import axios from "axios";

import postSaga from "./post";
import userSaga from "./user";

axios.defaults.baseURL = "http://54.180.189.240:3000/api";

export default function* rootSaga() {
  yield all([
    fork(postSaga), //  call
    fork(userSaga),
  ]);
}
