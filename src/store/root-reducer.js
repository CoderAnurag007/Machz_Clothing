import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { categoryreducer } from "./category/category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryreducer,
});
