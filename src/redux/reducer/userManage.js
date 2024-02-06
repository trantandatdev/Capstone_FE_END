import { SET_USERS } from "../constant/userManager.js";

const initialState = {
  usersRedux: false,
};

export let usersManageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, usersRedux: payload };

    default:
      return state;
  }
};
