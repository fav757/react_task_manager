import { ADD_NOTE, EDIT_NOTE } from './workspaceActions';
import notePlaceholder1 from './notePlaceholder1.jpg';
import notePlaceholder2 from './notePlaceholder2.jpg';

const initialState = [
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    tasks: [
      { done: false, name: 'do homework' },
      { done: true, name: 'call parents' },
    ],
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
    system: 'notes',
  },
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    tasks: [
      { done: false, name: 'do homework' },
      { done: true, name: 'call parents' },
    ],
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
    system: 'notes',
  },
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    tasks: [
      { done: false, name: 'do homework' },
      { done: true, name: 'call parents' },
    ],
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
    system: 'notes',
  },
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    tasks: [
      { done: false, name: 'do homework' },
      { done: true, name: 'call parents' },
    ],
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
    system: 'notes',
  },
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    tasks: [
      { done: false, name: 'do homework' },
      { done: true, name: 'call parents' },
    ],
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
    system: 'notes',
  },
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    tasks: [
      { done: false, name: 'do homework' },
      { done: true, name: 'call parents' },
    ],
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
    system: 'notes',
  },
  {
    isPinned: false,
    images: [notePlaceholder1],
    title: 'Inital note 1',
    tasks: [
      { done: false, name: 'do homework' },
      { done: true, name: 'call parents' },
    ],
    text: 'This is the your first note provided to test application',
    tags: ['home', 'work'],
    color: 'lightskyblue',
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
        tasks: [],
        text: '',
        tags: [],
        color: 'white',
        system: 'notes',
      };
      return [newNote, ...state];
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
