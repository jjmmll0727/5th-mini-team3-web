import { produce } from "immer";
import {
	LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
	LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
	SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from "../actions"; // prettier-ignore

const initialState = {
  loginLoading: false, // 로그인 로딩
  loginDone: false,
  loginError: null,
  logoutLoading: false, //  로그아웃 로딩
  logoutDone: false,
  logoutError: null,
  signUpLoading: false, //  회원가입 로딩
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false, // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = true;
        break;
      case LOG_OUT_REQUEST:
        draft.loginLoading = true;
        draft.logoutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpDone = true;
        draft.signUpLoading = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error.message;
        break;
      case "USER_ERROR_RESET":
        draft.signUpError = null;
      default:
        break;
    }
  });
};

export default reducer;
