import React from 'react';
import Icon from '../Icon/Icon';
import styles from './TagedItem.module.css';
import hashtagIcon from './hashtag_icon.svg';

function TagedItem(props) {
  return (
    <div className={styles.wrap}>
      <Icon title={props.title} icon={props.icon ? props.icon : hashtagIcon} />
      <b>{props.title}</b>
    </div>
  );
}

export default TagedItem;
