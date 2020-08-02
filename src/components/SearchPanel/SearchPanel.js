import React from 'react';
import styles from './SearchPanel.module.css';
import searchIcon from './search_icon.svg';
import closeIcon from './close_icon.svg';
import Icon from '../Icon/Icon';

function SearchPanel() {
  return (
    <div className={styles.wrap}>
      <Icon title='Search' icon={searchIcon} />
      <input className={styles.input} placeholder='Search' />
      <Icon title='Close' icon={closeIcon} />
    </div>
  );
}

export default SearchPanel;
