import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './workspaceActions';
import initialPicture from './initial_note_picture.jpg';

const initialState = [
  {
    isPinned: true,
    images: [initialPicture],
    title: 'Inital note',
    tasks: [
      { done: true, name: 'Visit my website' },
      { done: false, name: 'Explore it' },
      { done: false, name: 'Contact me' },
    ],
    text:
      "Hello! My name's Alex and I am trainee front-end developer." +
      "Here you can see my little note's app.",
    tags: ['front-end', 'react'],
    color: 'lightskyblue',
    system: 'notes',
  },
];

function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      const newNote = {
        isPinned: false,
        images: [],
        title: '',
        tasks: [],
        text: '',
        tags: [],
        color: 'white',
        system: 'notes',
      };
      return [newNote, ...state];
    }
    case EDIT_NOTE: {
      const newState = [...state];
      newState[action.payload.id][action.payload.property] =
        action.payload.value;
      return newState;
    }
    case DELETE_NOTE: {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }
    default:
      return state;
  }
}

export default workspaceReducer;
