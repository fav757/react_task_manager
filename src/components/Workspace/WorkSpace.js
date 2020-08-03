import React from 'react';
import styles from './Workspace.module.css';
import EditNote from '../EditNote/EditNote';

function Workspace() {
  return (
    <div className={styles.wrap}>
      <EditNote />
    </div>
  );
}

export default Workspace;
