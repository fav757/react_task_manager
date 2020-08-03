import React from 'react';
import styles from './SideMenu.module.css';
import Icon from '../Icon/Icon';
import noteIcon from './note_icon.svg';
import archiveIcon from './archive_icon.svg';
import deletedIcon from './deleted_icon.svg';
import hashtagIcon from './hashtag_icon.svg';

function MenuItem(props) {
  return (
    <div className={styles.menuItem}>
      <Icon title={props.title} icon={props.icon ? props.icon : hashtagIcon} />
      <b>{props.title}</b>
    </div>
  );
}

function SystemTags() {
  return (
    <div className={styles.section}>
      <MenuItem title='Notes' icon={noteIcon} />
      <MenuItem title='Archive' icon={archiveIcon} />
      <MenuItem title='Deleted' icon={deletedIcon} />
    </div>
  );
}

function UserTags() {
  return (
    <div className={styles.section}>
      <MenuItem title='Home' />
      <MenuItem title='Study' />
      <MenuItem title='Music' />
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
