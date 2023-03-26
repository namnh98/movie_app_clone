import { CLEAR_ERROR, INITIAL_PROPS, SHOW_ERROR } from '@redux-app/actionType';

export const getShowAlertError = (payload: any) => ({
  type: SHOW_ERROR.STORE,
  payload
});

export const getClearAlertError = () => ({
  type: CLEAR_ERROR.CLEAR
});

export const storeInitialProps = (payload: any) => ({
  type: INITIAL_PROPS.STORE,
  payload
});
