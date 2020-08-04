import React, { useState } from 'react';
import styles from './Note.module.css';
import EditNote from '../EditNote/EditNote';
import TagedItem from '../TagedItem/TagedItem';
import { connect } from 'react-redux';

function Note(props) {
  const { title, text, tags, color } = props.data[props.id];
  const [renderEdit, setRenderEdit] = useState(false);
  const handleClick = () => setRenderEdit((state) => !state);

  return (
    <div>
      <div
        onClick={handleClick}
        style={{ background: color }}
        className={styles.wrap}
      >
        <h3 className={styles.header}>{title}</h3>
        <div>{text}</div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <TagedItem key={tag} title={tag} />
          ))}
        </div>
      </div>
      {renderEdit && (
        <EditNote id={props.id} close={() => setRenderEdit(false)} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.workspaceReducer,
});

export default connect(mapStateToProps)(Note);
