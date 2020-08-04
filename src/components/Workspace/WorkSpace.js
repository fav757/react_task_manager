import React from 'react';
import styles from './Workspace.module.css';
import Note from '../Note/Note';
import { connect } from 'react-redux';

function Workspace(props) {
  const notes = props.notesDatabase.map((note, index) => {
    return <Note key={note.title} id={index} />
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.notesGrid}>
        {notes}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({notesDatabase: state['workspaceReducer']});

export default connect(mapStateToProps)(Workspace);
