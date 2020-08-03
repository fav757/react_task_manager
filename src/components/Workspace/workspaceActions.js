export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData
});