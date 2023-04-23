import * as actions from "./actionTypes";
import axios from "axios";

export const fetchUsersRequest = () => ({
  type: actions.FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = users => ({
  type: actions.FETCH_USERS_SUCCESS,
  payload: { users: users }
});

export const fetchUsersFailure = error => ({
  type: actions.FETCH_USERS_FAILURE,
  payload: { error: error }
});

export const fetchUser = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://dummyjson.com/users")
      .then(res => {
        const users = res.data.users;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
