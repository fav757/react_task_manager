import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.info}>
        If you want find out information about me please visit my resume website
      </div>
      <div className={styles.linkTab}>
        <div className={styles.hiddenSector}>
          <div className={styles.slideButton}>{'>'}</div>
          <div className={styles.fone}></div>
        </div>
        <a href='https://fav757.github.io/'>https://fav757.github.io/</a>
      </div>
    </footer>
  );
}

export default Footer;
