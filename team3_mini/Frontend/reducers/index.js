import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import site from "./site";

const intialState = {
  user: {},
  post: {},
};

const rootReducer = combineReducers({
  index: (state = intialState, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  site,
});

export default rootReducer;
