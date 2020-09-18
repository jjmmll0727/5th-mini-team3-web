import { produce } from "immer";
import { GET_SITES_FAILURE, GET_SITES_REQUEST, GET_SITES_SUCCESS } from "../actions";

const initialState = {
  Websites: [],
  getSitesLoading: false, // 로그인 로딩
  getSitesDone: false,
  getSitesError: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_SITES_REQUEST:
        draft.getSitesLoading = true;
        break;
      case GET_SITES_SUCCESS:
        draft.getSitesLoading = false;
        draft.getSitesDone = true;
        draft.Websites = action.data;
        break;
      case GET_SITES_FAILURE:
        draft.getSitesLoading = false;
        draft.getSitesError = action.data;
      default:
        break;
    }
  });
};

export default reducer;
