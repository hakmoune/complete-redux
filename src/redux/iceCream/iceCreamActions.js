import { BUY_ICECREAM } from "./actionTypes";

export const buyIceCream = numbersOfIceCreams => ({
  type: BUY_ICECREAM,
  payload: { numbersOfIceCreams: numbersOfIceCreams }
});
