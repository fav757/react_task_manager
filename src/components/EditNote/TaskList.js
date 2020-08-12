import React, { useState, useEffect } from 'react';
import styles from './EditNote.module.css';
import Icon from '../Icon/Icon';
import deleteIcon from './deleted_icon.svg';

function TaskItem(props) {
  const [listItem, setListItem] = useState({
    done: props.task.done,
    name: props.task.name,
  });

  const handleChange = (event) => {
    const newState = Object.assign({}, listItem);

    newState[event.target.dataset.for] =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    setListItem(newState);

    const newList = props.tasks.slice();
    newList.splice(props.index, 1, listItem);

    props.editNote({
      id: props.id,
      property: 'tasks',
      value: newList,
    });
  };

  return (
    <li
      className={styles.tasksItem}
      style={{ textDecoration: props.task.done ? '' : 'line-through' }}
    >
      <input
        data-for='done'
        checked={listItem.done}
        onChange={handleChange}
        type='checkbox'
      />
      <input data-for='name' onChange={handleChange} value={listItem.name} />
      <div>
        <Icon title='delete task' icon={deleteIcon} />
      </div>
    </li>
  );
}

function TaskList(props) {
  return (
    <ul className={styles.tasksList}>
      {props.tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          tasks={props.tasks}
          editNote={props.editNote}
          id={props.id}
        />
      ))}
    </ul>
  );
}

export default TaskList;
