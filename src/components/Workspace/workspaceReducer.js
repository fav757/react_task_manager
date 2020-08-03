import { ADD_NOTE } from './workspaceActions';

const initialState = [
  {
    title: 'but milk',
    text: 'tomorow will be promotion',
    tags: 'home',
    color: 'lightskyblue',
    system: 'all'
  }
];

function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default workspaceReducer;
