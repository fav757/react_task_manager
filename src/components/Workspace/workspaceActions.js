export const ADD_NOTE = 'ADD_NOTE';
export const addNote = {
  type: ADD_NOTE,
};

export const EDIT_NOTE = 'EDIT_NOTE';
export const editNote = (noteData) => ({
  type: EDIT_NOTE,
  payload: noteData,
});
