import { TOGGLE_SIDE_MENU, CHANGE_SEARCH_QUERY } from './headerActions';

const intitialState = {
  menuIsOpen: false,
  searchQuery: '',
};

function headerReducer(state = intitialState, action) {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, menuIsOpen: !state.menuIsOpen };
    case CHANGE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
}

export default headerReducer;
