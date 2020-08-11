import { ADD_NOTE, EDIT_NOTE } from './workspaceActions';
import notePlaceholder1 from './notePlaceholder1.jpg';
import notePlaceholder2 from './notePlaceholder2.jpg';

const initialState = [
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
    system: 'notes',
  },
  {
    isPinned: true,
    images: [],
    title: 'Inital note 2',
    text: 'This is the your second note provided to test application',
    tags: ['music'],
    color: 'tomato',
    system: 'notes',
  },
  {
    isPinned: true,
    images: [notePlaceholder2],
    title: 'Inital note 3',
    text: 'This is the your third note provided to test application',
    tags: ['home', 'study'],
    color: 'lightgreen',
    system: 'notes',
  },
];

function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        isPinned: false,
        images: [],
        title: '',
        text: '',
        tags: [],
        color: 'white',
        system: 'notes',
      };
      return [...state, newNote];
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
