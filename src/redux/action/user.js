import { userService } from "../../services/service";
import { SET_INFO } from "../constant/user";

export const loginAction = (formData, callback) => {
  //redux thunk
  return (dispatch) => {
    userService
      .login(formData)
      .then((res) => {
        localStorage.setItem("USER", JSON.stringify(res.data.content));

        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setInfoAction = (payload) => ({
  type: SET_INFO,
  payload,
});
