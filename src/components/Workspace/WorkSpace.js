import React, { useState } from 'react';
import styles from './Workspace.module.css';
import Note from '../Note/Note';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import pinIcon from './pin_icon.svg';
import EditNote from '../EditNote/EditNote';
import { addNote } from './workspaceActions';

function checkNoteProperites(note, props) {
  // Is note pinned?
  const isPinned = !!note.isPinned;
  // Do note text or title include search query?
  const isSearchQuery =
    note.text.includes(props.searchQuery) ||
    note.title.includes(props.searchQuery);
  // Does note system category = current system category?
  const isSystem = note.system === props.systemTag;
  // Does note tags include active tag or current tag is 'all'?
  const isTag = props.userTag === 'all' || note.tags.includes(props.userTag);

  return { isPinned, isSearchQuery, isSystem, isTag };
}

function CreateNoteInput(props) {
  const [renderEdit, setRenderEdit] = useState(false);
  const handleFocus = () => {
    props.addNote();
    setRenderEdit(true);
  };

  return (
    <div className={styles.createNote}>
      <input onFocus={handleFocus} placeholder='Create a new note' />
      {renderEdit && (
        <EditNote id={0} close={() => setRenderEdit(false)} />
      )}
    </div>
  );
}

function Workspace(props) {
  const pinnedNotes = props.notesDatabase.map((note, index) => {
    const { isPinned, isSearchQuery, isSystem, isTag } = checkNoteProperites(
      note,
      props
    );
    if (isPinned && isSearchQuery && isSystem && isTag) {
      return <Note key={index} id={index} />;
    } else {
      return null;
    }
  });

  const notPinnedNotes = props.notesDatabase.map((note, index) => {
    const { isPinned, isSearchQuery, isSystem, isTag } = checkNoteProperites(
      note,
      props
    );
    if (!isPinned && isSearchQuery && isSystem && isTag) {
      return <Note key={index} id={index} />;
    } else {
      return null
    }
  });

  return (
    <div className={styles.wrap}>
      <CreateNoteInput addNote={props.addNote} notesDatabase={props.notesDatabase}/>
      <div className={styles.pinnedHeader}>
        <Icon icon={pinIcon} title='pin' />
        <h3>Pinned notes:</h3>
      </div>
      <div className={styles.notesGrid}>{pinnedNotes}</div>
      <div className={styles.notesGrid}>{notPinnedNotes}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  notesDatabase: state.workspaceReducer,
  searchQuery: state.headerReducer.searchQuery,
  systemTag: state.sideMenuReducer.systemTag,
  userTag: state.sideMenuReducer.userTag,
});

const mapDispatchToProps = (dispatch) =>({
  addNote: () => dispatch(addNote)
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
