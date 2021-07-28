import { orderConstants } from "../constants/orderConstants";

const setAddressInfo = (payload: any) => {
  return {
    type: orderConstants.SET_ADDRESS_INFO,
    payload,
  };
};
const setPizzaInfo = (payload: any) => {
  return {
    type: orderConstants.SET_PIZZA_INFO,
    payload,
  };
};
const setPaymentInfo = (payload: any) => {
  return {
    type: orderConstants.SET_PAYMENT_INFO,
    payload,
  };
};

export const orderActions = {
  setAddressInfo,
  setPizzaInfo,
  setPaymentInfo,
};
