import { orderActions } from "./orderActionCreator";

export const setAddressInfo = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(orderActions.setAddressInfo(payload));
  };
};
export const setPizzaInfo = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(orderActions.setPizzaInfo(payload));
  };
};
export const setPaymentInfo = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(orderActions.setPaymentInfo(payload));
  };
};
