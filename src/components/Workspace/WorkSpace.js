import React from 'react';
import styles from './Workspace.module.css';
import Note from '../Note/Note';
import { connect } from 'react-redux';

function Workspace(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.notesGrid}>
        {props.notesDatabase.map((note, index) => {
          return <Note key={index} id={index}/>;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  notesDatabase: state['workspaceReducer'],
});

export default connect(mapStateToProps)(Workspace);
