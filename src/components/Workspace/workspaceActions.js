export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const addNote = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData
});

export const editNote = (noteData) => ({
  type: EDIT_NOTE,
  payload: noteData
});