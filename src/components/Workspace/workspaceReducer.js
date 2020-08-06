import { ADD_NOTE, EDIT_NOTE } from './workspaceActions';
import notePlaceholder1 from './notePlaceholder1.jpg';
import notePlaceholder2 from './notePlaceholder2.jpg';

const initialState = [
  {
    images: [notePlaceholder1, notePlaceholder2],
    title: 'buy milk',
    text: 'tomorow will be promotion',
    tags: ['home'],
    color: 'lightskyblue',
    system: 'all',
  }
];

function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case EDIT_NOTE:
      const newState = [...state];
      newState[action.payload.id][action.payload.property] =
        action.payload.value;
      return newState;
    default:
      return state;
  }
}

export default workspaceReducer;
