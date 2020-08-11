import React from 'react';
import styles from './Workspace.module.css';
import Note from '../Note/Note';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import pinIcon from './pin_icon.svg';

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

function Workspace(props) {
  const pinnedNotes = props.notesDatabase.map((note, index) => {
    const { isPinned, isSearchQuery, isSystem, isTag } = checkNoteProperites(
      note,
      props
    );
    if (isPinned && isSearchQuery && isSearchQuery && isSystem && isTag) {
      return <Note key={index} id={index} />;
    }
  });

  const notPinnedNotes = props.notesDatabase.map((note, index) => {
    const { isPinned, isSearchQuery, isSystem, isTag } = checkNoteProperites(
      note,
      props
    );
    if (!isPinned && isSearchQuery && isSearchQuery && isSystem && isTag) {
      return <Note key={index} id={index} />;
    }
  });

  return (
    <div className={styles.wrap}>
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

export default connect(mapStateToProps)(Workspace);
