import { CATEGORIES_ACTION_TYPE } from "./category.type";

const CATEGORIES_INITIAL_STATE = {
  categories: {},
};

export const categoryreducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
