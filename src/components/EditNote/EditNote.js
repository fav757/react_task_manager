import React from 'react';
import { connect } from 'react-redux';
import styles from './EditNote.module.css';
import TagedItem from '../TagedItem/TagedItem';
import { editNote, deleteNote } from '../Workspace/workspaceActions';
import Inputs from './Inputs';
import Controlls from './Controls';
import ImagesSector from './ImagesSector';
import TaskList from './TaskList';

function EditNote(props) {
  const { images, title, tasks, text, tags, color } = props.data[props.id];

  return (
    <div className={styles.wrap}>
      <div style={{ background: color }} className={styles.form}>
        <Controlls
          id={props.id}
          data={props.data[props.id]}
          editNote={props.editNote}
          close={props.close}
          systemTag={props.systemTag}
          deleteNote={props.deleteNote}
        />
        <div className={styles.formMainSector}>
          <ImagesSector
            images={images}
            editNote={props.editNote}
            id={props.id}
          />
          <TaskList editNote={props.editNote} id={props.id} tasks={tasks} />
          <Inputs
            id={props.id}
            title={title}
            text={text}
            editNote={props.editNote}
          />
        </div>
        <div className={styles.tagList}>
          {tags.map((tag) => (
            <TagedItem key={tag} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.workspaceReducer,
  systemTag: state.sideMenuReducer.systemTag
});

const mapDispatchToProps = (dispatch) => ({
  editNote: (value) => dispatch(editNote(value)),
  deleteNote: (id) => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
