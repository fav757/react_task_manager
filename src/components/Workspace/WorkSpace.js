import React from 'react';
import styles from './Workspace.module.css';
import EditNote from '../EditNote/EditNote';
import Note from '../Note/Note';
import { connect } from 'react-redux';

function Workspace(props) {
  const notes = props.notesDatabase.map((note) => {
    return <Note key={note.title} data={note} />
  });

  return (
    <div className={styles.wrap}>
      <EditNote />
      <div className={styles.notesGrid}>
        {notes}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({notesDatabase: state['workspaceReducer']});

export default connect(mapStateToProps)(Workspace);
