import {
  SET_USERS,
} from "../constant/userManager";

export const setUsersData = (payload) => ({
  type: SET_USERS,
  payload,
});


