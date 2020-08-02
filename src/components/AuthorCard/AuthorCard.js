import React, { useState } from 'react';
import styles from './AuthorCard.module.css';
import photo from './author_photo.jpg';
import closeIcon from './close_icon.svg';
import Icon from '../Icon/Icon';

function ModalInfo() {
  return (
    <div className={styles.fone}>
      <div className={styles.modal}>
        <div className={styles.closeContainer}>
          <Icon title='close modal' icon={closeIcon} />
        </div>
        <img className={styles.avatar} src={photo} alt='author' />
        <h3>Alexandr Saplsky</h3>
        <h4>Junior Front-end developer</h4>
        <p>
          If you want find out some information about me please visit my resume{' '}
          <a href='https://fav757.github.io/'>website</a>
        </p>
        <p>This project was created for the purpose of studying</p>
      </div>
    </div>
  );
}

function AuthorCard() {
  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <h2 className={styles.letter}>
          A
        </h2>
      </div>
    </div>
  );
}

export default AuthorCard;
