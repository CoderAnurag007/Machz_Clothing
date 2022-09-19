import { CATEGORIES_ACTION_TYPE } from "./category.type";

export const setCategories = (categories) => {
  // console.log(categories, " from category action");
  return {
    type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
    payload: categories,
  };
};
