import * as actions from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case actions.FETCH_USERS_SUCCESS:
      return { users: action.payload.users, error: "", loading: false };

    case actions.FETCH_USERS_FAILURE:
      return { error: action.payload.error, state: [], loading: false };

    default:
      return state;
  }
};
