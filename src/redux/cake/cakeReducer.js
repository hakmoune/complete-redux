import { BUY_CAKE } from "./actionTypes";

const initialState = {
  numberOfCakes: 10
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numberOfCakes: state.numberOfCakes - 1
      };
    default:
      return state;
  }
};
