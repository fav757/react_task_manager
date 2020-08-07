export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
export const toggleSideMenu = { type: TOGGLE_SIDE_MENU };

export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';
export const changeSearchQuery = (value) => ({
  type: CHANGE_SEARCH_QUERY,
  payload: value
});
