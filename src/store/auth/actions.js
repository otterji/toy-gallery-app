import authConstants from "./constants";

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
  postRegister: ({ email, password }) => ({
    type: authConstants.POST_REGISTER.REQUEST,
    email,
    password
  }),
  getEmailCheckAction: ({ email }) => ({
    type: authConstants.GET_EMAIL_CHECK.REQUEST,
    email,
  }),
};

export default authActions