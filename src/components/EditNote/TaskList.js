import React from 'react';
import styles from './EditNote.module.css';

function TaskList(props) {
  return (
    <ul className={styles.tasksList}>
      {props.tasks.map((task) => (
        <li key={task}>
          <input type='checkbox' />
          {task}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
