import React, { useState } from 'react';
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

function NoteTextarea() {
  const [rowsLength, setRowLength] = useState(2);
  const handleChange = (event) => {
    if (
      event.target.getBoundingClientRect().height < event.target.scrollHeight
    ) {
      setRowLength((state) => state + 1);
    }
  };

  return (
    <textarea
      onChange={handleChange}
      rows={rowsLength}
      className={styles.input}
      name='text'
      placeholder='Note text'
    ></textarea>
  );
}

function Controlls() {
  return (
    <div className={styles.controlls}>
      <Icon title='back' icon={backIcon} />
      <Icon title='tag' icon={tagIcon} />
      <Icon title='palette' icon={paletteIcon} />
      <Icon title='picture' icon={pictureIcon} />
      <Icon title='tasks' icon={tasksIcon} />
      <Icon title='archive' icon={archiveIcon} />
      <Icon title='delete' icon={deleteIcon} />
      <Icon title='pin' icon={pinIcon} />
    </div>
  );
}

function EditNote() {
  return (
    <div className={styles.wrap}>
      <form className={styles.form}>
        <Controlls />
        <input className={styles.input} name='title' placeholder='note title' />
        <NoteTextarea />
        <div className={styles.tagList}>
          <TagedItem title='Home' />
          <TagedItem title='Study' />
        </div>
      </form>
    </div>
  );
}

export default EditNote;
