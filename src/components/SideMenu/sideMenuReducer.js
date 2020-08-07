import { SET_SYSTEM_TAG, SET_USER_TAG } from './sideMenuActions';

const initialState = {
  systemTag: 'note',
  userTag: null,
};

function sideMenuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SYSTEM_TAG:
      return { ...state, systemTag: action.payload };
    case SET_USER_TAG:
      return { ...state, userTag: action.payload };
    default:
      return state;
  }
}

export default sideMenuReducer;
