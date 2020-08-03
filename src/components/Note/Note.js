import React from 'react';
import styles from './Note.module.css';

function Note(props) {
  const { title, text, tags, color } = props.data;

  return (
    <div style={{background: color}} className={styles.wrap}>
      <h3 className={styles.header}>{title}</h3>
      <div>{text}</div>
      <div className={styles.tags}>{tags}</div>
    </div>
  );
}

export default Note;
