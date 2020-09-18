import { produce } from "immer";

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
      default:
        break;
    }
  });
};

export default reducer;
