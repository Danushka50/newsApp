import {USER_SIGNIN} from '../types';

const INITIAL_STATE = {
  loginLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return {...state, loginLoading: true};
    default:
      return state;
  }
};
