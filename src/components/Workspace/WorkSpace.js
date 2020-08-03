import React from 'react';
import styles from './Workspace.module.css';
import CreateNote from '../CreateNote/CreateNote';

function Workspace() {
  return (
    <div className={styles.wrap}>
      <CreateNote />
    </div>
  );
}

export default Workspace;
