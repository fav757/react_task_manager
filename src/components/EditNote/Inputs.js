import React from 'react';
import styles from './EditNote.module.css';

function Inputs(props) {
  const handleChange = (event) => {
    props.editNote({
      id: props.id,
      property: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <input
        onChange={handleChange}
        value={props.title}
        className={styles.input}
        name='title'
      />
      <textarea
        onChange={handleChange}
        defaultValue={props.text}
        className={styles.input}
        name='text'
      />
    </React.Fragment>
  );
}

export default Inputs;
