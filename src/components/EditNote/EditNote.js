import React, { useState } from 'react';
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

function EditNote(props) {
  const { title, text, tags, color } = props.data[props.id];
  const handleChange = (event) =>
    props.editNote({
      id: props.id,
      property: event.target.name,
      value: event.target.value,
    });

  return (
    <div className={styles.wrap}>
      <form style={{ background: color }} className={styles.form}>
        <div className={styles.controlls}>
          <div onClick={props.close}>
            <Icon title='back' icon={backIcon} />
          </div>
          <div>
            <Icon title='tag' icon={tagIcon} />
          </div>
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
        <input
          onChange={handleChange}
          value={title}
          className={styles.input}
          name='title'
        />
        <textarea
          onChange={handleChange}
          defaultValue={text}
          className={styles.input}
          name='text'
        />
        <div className={styles.tagList}>
          {tags.map((tag) => (
            <TagedItem key={tag} title={tag} />
          ))}
        </div>
      </form>
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
