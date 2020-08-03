import React from 'react';
import styles from './Note.module.css';

function Note() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.header}>Note title</h3>
      <div>Note text</div>
      <div className={styles.tags}>Note tags</div>
    </div>
  );
}

export default Note;
