import { TOGGLE_SIDE_MENU } from './headerActions';

const intitialState = {
  menuIsOpen: false
}

function headerReducer(state = intitialState, action) {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, menuIsOpen: !state.menuIsOpen };
    default:
      return state;
  }
}

export default headerReducer;
