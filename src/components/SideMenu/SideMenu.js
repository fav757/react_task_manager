import React from 'react';
import styles from './SideMenu.module.css';
import noteIcon from './note_icon.svg';
import archiveIcon from './archive_icon.svg';
import deletedIcon from './deleted_icon.svg';
import TagedItem from '../TagedItem/TagedItem';

function SystemTags() {
  return (
    <div className={styles.section}>
      <TagedItem title='Notes' icon={noteIcon} />
      <TagedItem title='Archive' icon={archiveIcon} />
      <TagedItem title='Deleted' icon={deletedIcon} />
    </div>
  );
}

function UserTags() {
  return (
    <div className={styles.section}>
      <TagedItem title='Home' />
      <TagedItem title='Study' />
      <TagedItem title='Music' />
    </div>
  );
}

function Sidemenu() {
  return (
    <aside className={styles.wrap}>
      <SystemTags />
      <UserTags />
    </aside>
  );
}

export default Sidemenu;
