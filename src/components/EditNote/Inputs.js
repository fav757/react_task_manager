import React, { useEffect, useRef } from 'react';
import styles from './EditNote.module.css';

function Inputs(props) {
  const handleChange = (event) => {
    props.editNote({
      id: props.id,
      property: event.target.name,
      value: event.target.value,
    });
  };

  const ref = useRef();
  useEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      ref.current.style.height = ref.current.scrollHeight + 16 + 'px';
    }
  });

  return (
    <React.Fragment>
      <input
        onChange={handleChange}
        value={props.title}
        className={styles.input}
        name='title'
      />
      <textarea
        ref={ref}
        onChange={handleChange}
        defaultValue={props.text}
        className={styles.input}
        name='text'
      />
    </React.Fragment>
  );
}

export default Inputs;
