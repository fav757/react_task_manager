import React from 'react';
import styles from './Workspace.module.css';
import EditNote from '../EditNote/EditNote';
import Note from '../Note/Note';

function Workspace() {
  return (
    <div className={styles.wrap}>
      <EditNote />
      <div className={styles.notesGrid}>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}

export default Workspace;
