import React from 'react';
import styles from './Icon.module.css';

function Icon(props) {
  return (
    <div className={styles.iconWrap}>
      <img className={styles.icon} src={props.icon} />
    </div>
  );
}

export default Icon;
