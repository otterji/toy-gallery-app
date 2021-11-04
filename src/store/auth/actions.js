import authConstants, { RESET_STORE } from "./constants";

const authActions = {
  logIn: ({ email, password }) => ({
    type: authConstants.LOG_IN.REQUEST,
    email,
    password,
  }),
  logOut: () => ({
    type: authConstants.LOG_OUT.REQUEST,
  }),
  getMe: () => ({
    type: authConstants.GET_ME.REQUEST,
  }),
  postRegister: ({ email, password, nickname }) => ({
    type: authConstants.POST_REGISTER.REQUEST,
    email,
    password,
    nickname
  }),
  getEmailCheckAction: ({ email, password }) => ({
    type: authConstants.GET_EMAIL_CHECK.REQUEST,
    email,
    password,
  }),
  resetStore: () => ({
    type: RESET_STORE,
  }),
};

export default authActions