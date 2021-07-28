// App  Reducer
import { orderConstants } from "../constants/orderConstants";

const appReducerDefaultState = {
  addressInfo: {},
  pizzaInfo: {},
  paymentInfo: {},
};

interface IAction {
  type: string;
  payload?: any;
}

const orderReducer = (state = appReducerDefaultState, action: IAction) => {
  switch (action.type) {
    case orderConstants.SET_ADDRESS_INFO:
      return { ...state, addressInfo: action.payload };
    case orderConstants.SET_PIZZA_INFO:
      return { ...state, pizzaInfo: action.payload };
    case orderConstants.SET_PAYMENT_INFO:
      return { ...state, paymentInfo: action.payload };

    default:
      return state;
  }
};

export default orderReducer;
