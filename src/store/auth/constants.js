export const RESET_STORE = 'RESET_STORE';

const authConstants = {
  LOG_IN: {
    REQUEST: 'Auth/LOG_IN_REQUEST',
    SUCCESS: 'Auth/LOG_IN_SUCCESS',
    FAIL: 'Auth/LOG_IN_FAIL',
  },
  LOG_OUT: {
    REQUEST: 'Auth/LOG_OUT_REQUEST',
    SUCCESS: 'Auth/LOG_OUT_SUCCESS',
    FAIL: 'Auth/LOG_OUT_FAIL',
  },
  GET_ME: {
    REQUEST: 'Auth/GET_ME_REQUEST',
    SUCCESS: 'Auth/GET_ME_SUCCESS',
    FAIL: 'Auth/GET_ME_FAIL',
  },
  GET_EMAIL_CHECK: {
    REQUEST: 'Auth/GET_EMAIL_CHECK_REQUEST',
    SUCCESS: 'Auth/GET_EMAIL_CHECK_SUCCESS',
    FAIL: 'Auth/GET_EMAIL_CHECK_FAIL',
  },
  POST_REGISTER: {
    REQUEST: 'Auth/POST_REGISTER_REQUEST',
    SUCCESS: 'Auth/POST_REGISTER_SUCCESS',
    FAIL: 'Auth/POST_REGISTER_FAIL',
  },
};

export default authConstants
