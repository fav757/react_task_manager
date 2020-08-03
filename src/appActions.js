export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (noteDate) => ({
  type: ADD_NOTE,
  payload: noteDate
});