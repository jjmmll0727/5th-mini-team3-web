import { produce } from "immer";
import { GET_SITES_FAILURE, GET_SITES_REQUEST, GET_SITES_SUCCESS,
         GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS,
         PUT_CATEGORY_REQUEST,PUT_CATEGORY_SUCCESS,PUT_CATEGORY_FAILURE,
         DELETE_CATEGORY_FAILURE,DELETE_CATEGORY_REQUEST,DELETE_CATEGORY_SUCCESS,
         ADD_SITE_FAILURE,ADD_SITE_REQUEST,ADD_SITE_SUCCESS,DELETE_SITE_FAILURE,DELETE_SITE_REQUEST,DELETE_SITE_SUCCESS
} from "../actions";

const initialState = {
  currentWebsites: [],
  Categories: ["ALL"],
  getSitesLoading: false, // 사이트
  getSitesDone: false,
  getSitesError: null,
  getCategoryLoading: false, // 카테고리
  getCategoryDone: false,
  getCategoryError: null,
  putCategoryLoading: false, // 카테고리 추가
  putCategoryDone: false,
  putCategoryError: null,
  deleteCategoryLoading: false, // 카테고리 추가
  deleteCategoryDone: false,
  deleteCategoryError: null,
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
        break;
      case GET_CATEGORY_REQUEST:
        draft.getCategoryLoading = true;
        break;
      case GET_CATEGORY_SUCCESS:
        draft.getCategoryLoading = false;
        draft.getCategoryDone = true;
        draft.Categories = draft.Categories.concat(action.data);
        break;
      case GET_CATEGORY_FAILURE:
        draft.getCategoryDone = false;
        draft.getCategoryError = action.data;
        break;
      case PUT_CATEGORY_REQUEST:
        draft.putCategoryDone = false;
        draft.putCategoryLoading = true;
        break;
      case PUT_CATEGORY_SUCCESS:
        draft.putCategoryDone = true;
        draft.putCategoryLoading = false;
        draft.putCategoryError = action.data;
        break;
      case PUT_CATEGORY_FAILURE:
        draft.putCategoryDone = false;
        draft.putCategoryLoading = false;
        draft.putCategoryError = action.data;
        break; 
      case DELETE_CATEGORY_REQUEST:
        draft.deleteCategoryDone = false;
        draft.deleteCategoryError = action.data;
        break;
      case DELETE_CATEGORY_SUCCESS:
        draft.deleteCategoryDone = false;
        draft.deleteCategoryError = action.data;
        break;
      case DELETE_CATEGORY_FAILURE:
        draft.deleteCategoryDone = false;
        draft.deleteCategoryError = action.data;
        break;     
      default:
        break;
    }
  });
};

export default reducer;
