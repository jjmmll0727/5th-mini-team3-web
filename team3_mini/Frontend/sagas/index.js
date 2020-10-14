import { all, fork } from "redux-saga/effects";
import axios from "axios";

import getDataSaga from "./getData";
import userSaga from "./user";
import putDataSaga from "./putData"



axios.defaults.baseURL = "http://54.180.189.240:3000/api";

export default function* rootSaga() {
  yield all([
    fork(getDataSaga), //  call
    fork(userSaga),
    fork(putDataSaga)
  ]);
}
