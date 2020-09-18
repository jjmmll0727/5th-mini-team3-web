import { all, fork } from "redux-saga/effects";
import axios from "axios";

import postSaga from "./post";
import userSaga from "./user";

axios.defaults.baseURL = "";

export default function* rootSaga() {
  yield all([
    fork(postSaga), //  call
    fork(userSaga),
  ]);
}
