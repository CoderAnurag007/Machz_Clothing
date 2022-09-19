import { CATEGORIES_ACTION_TYPE } from "./category.type";

export const setCategories = (categories) => async (dispatch) => {
  console.log(categories, " from category action");
  dispatch({
    type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
    payload: categories,
  });
};
