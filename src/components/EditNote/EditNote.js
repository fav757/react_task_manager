import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './EditNote.module.css';
import TagedItem from '../TagedItem/TagedItem';
import Icon from '../Icon/Icon';
import backIcon from './back_icon.svg';
import paletteIcon from './palette_icon.svg';
import tagIcon from './tag_icon.svg';
import archiveIcon from './archive_icon.svg';
import deleteIcon from './deleted_icon.svg';
import pictureIcon from './picture_icon.svg';
import tasksIcon from './tasks_icon.svg';
import pinIcon from './pin_icon.svg';
import { editNote } from '../Workspace/workspaceActions';

function TitleInput(props) {
  const handleChange = (event) => {
    props.editNote({
      id: props.id,
      property: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <input
      onChange={handleChange}
      value={props.title}
      className={styles.input}
      name='title'
    />
  );
}

function TextAreaInput(props) {
  const handleChange = (event) => {
    props.editNote({
      id: props.id,
      property: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <textarea
      onChange={handleChange}
      defaultValue={props.text}
      className={styles.input}
      name='text'
    />
  );
}

function CloseModalIcon(props) {
  useEffect(() => {
    const closeModal = (event) => {
      if (!event.target.closest('.' + styles.form)) {
        props.close();
      }
    };
    document.addEventListener('click', closeModal);
    return () => document.removeEventListener('click', closeModal);
  }, []);

  return (
    <div onClick={props.close}>
      <Icon title='back' icon={backIcon} />
    </div>
  );
}

function TagIcon() {
  return (
    <div>
      <Icon title='tag' icon={tagIcon} />
    </div>
  );
}

function Controlls(props) {
  return (
    <div className={styles.controlls}>
      <CloseModalIcon close={props.close} />
      <TagIcon />
      <div>
        <Icon title='palette' icon={paletteIcon} />
      </div>
      <div>
        <Icon title='picture' icon={pictureIcon} />
      </div>
      <div>
        <Icon title='tasks' icon={tasksIcon} />
      </div>
      <div>
        <Icon title='archive' icon={archiveIcon} />
      </div>
      <div>
        <Icon title='delete' icon={deleteIcon} />
      </div>
      <div>
        <Icon title='pin' icon={pinIcon} />
      </div>
    </div>
  );
}

function EditNote(props) {
  const { title, text, tags, color } = props.data[props.id];

  return (
    <div className={styles.wrap}>
      <div style={{ background: color }} className={styles.form}>
        <Controlls close={props.close} />
        <TitleInput id={props.id} title={title} editNote={props.editNote} />
        <TextAreaInput id={props.id} text={text} editNote={props.editNote} />
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
});

const mapDispatchToProps = (dispatch) => ({
  editNote: (value) => dispatch(editNote(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
