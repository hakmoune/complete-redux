import { BUY_ICECREAM } from "./actionTypes";

const initialState = {
  numberOfIceCreames: 20
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numberOfIceCreames:
          state.numberOfIceCreames - action.payload.numbersOfIceCreams
      };
    default:
      return state;
  }
};
