import { createActions } from "redux-actions";

const actions = createActions({
  LOGIN_ACTION: null,
  LOGIN_SUCCESS_ACTION: null,
  REFRESH_TOKEN_ACTION: null,
  GET_INFO_USER_FROM_TOKEN_ACTION: null,
});

export const {
  loginAction,
  loginSuccessAction,
  refreshTokenAction,
  getInfoUserFromTokenAction,
} = actions;
