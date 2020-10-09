import { produce } from "immer";
import { GET_SITES_FAILURE, GET_SITES_REQUEST, GET_SITES_SUCCESS,
         GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS
} from "../actions";

const initialState = {
  currentWebsites: [],
  Categories: [],
  getSitesLoading: false, // 사이트
  getSitesDone: false,
  getSitesError: null,
  getCategoryLoading: false, // 카테고리
  getCategoryDone: false,
  getCategoryError: null,
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
        draft.currentWebsites = action.data;
        break;
      case GET_SITES_FAILURE:
        draft.getSitesLoading = false;
        draft.getSitesError = action.data;
      case GET_CATEGORY_REQUEST:
        draft.getCategoryLoading = true;
        break;
      case GET_CATEGORY_SUCCESS:
        draft.getCategoryLoading = false;
        draft.getCategoryDone = true;
        draft.Categories = action.data;
        break;
      case GET_CATEGORY_FAILURE:
        draft.getCategoryDone = false;
        draft.getCategoryError = action.data;
      default:
        break;
    }
  });
};

export default reducer;
