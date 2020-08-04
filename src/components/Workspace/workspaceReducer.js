import { ADD_NOTE, EDIT_NOTE } from './workspaceActions';

const initialState = [
  {
    title: 'buy milk',
    text: 'tomorow will be promotion',
    tags: ['home'],
    color: 'lightskyblue',
    system: 'all',
  },
  {
    title: 'Drink cofee',
    text: 'Sometimes it can be very pleasently',
    tags: ['work', 'fun'],
    color: 'lightgreen',
    system: 'all',
  }
];

function workspaceReducer(state = initialState, action) {
  console.log(state);

  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case EDIT_NOTE:
      const newState = [...state];
      newState[action.payload.id][action.payload.property] = action.payload.value;
      return newState;
    default:
      return state;
  }
}

export default workspaceReducer;
