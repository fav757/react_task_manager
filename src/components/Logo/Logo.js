import React from 'react';
import styles from './Logo.module.css';
import logoIcon from './logo_placeholder.png';

function Logo() {
  return (
    <div className={styles.wrap}>
      <img className={styles.icon} src={logoIcon} alt='logo' />
      <h1 className={styles.header}>Logo</h1>
    </div>
  );
}

export default Logo;
