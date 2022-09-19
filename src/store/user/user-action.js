import { USER_ACTION_TYPE } from "./user-types";

// const actionsetter = (user) => {
//   return {
//     type: USER_ACTION_TYPE.SET_CURRENT_USER,
//     user,
//   };
// };

export const setCurrentUser = (user) => {
  return { type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user };
};
