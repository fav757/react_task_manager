import React from 'react';
import styles from './Workspace.module.css';
import Note from '../Note/Note';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import pinIcon from './pin_icon.svg';

function Workspace(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.pinnedHeader}>
        <Icon icon={pinIcon} title='pin' />
        <h3>Pinned notes:</h3>
      </div>
      <div className={styles.notesGrid}>
        {props.notesDatabase.map((note, index) => {
          if (note.isPinned) {
            return <Note key={index} id={index} />;
          }
        })}
      </div>
      <div className={styles.notesGrid}>
        {props.notesDatabase.map((note, index) => {
          if (!note.isPinned) {
            return <Note key={index} id={index} />;
          }
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  notesDatabase: state['workspaceReducer'],
});

export default connect(mapStateToProps)(Workspace);
