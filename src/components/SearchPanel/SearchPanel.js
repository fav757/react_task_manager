import React from 'react';
import styles from './SearchPanel.module.css';
import searchIcon from './search_icon.svg';
import closeIcon from './close_icon.svg';
import Icon from '../Icon/Icon';
import { connect } from 'react-redux';
import { changeSearchQuery } from '../Header/headerActions';

function SearchPanel(props) {
  const handleChange = (event) => {
    props.changeSearchQuery(event.target.value);
  };

  return (
    <div className={styles.wrap}>
      <Icon title='Search' icon={searchIcon} />
      <input
        onChange={handleChange}
        className={styles.input}
        placeholder='Search'
      />
      <Icon title='Close' icon={closeIcon} />
    </div>
  );
}

const mapDispatchToProps = (dispath) => ({
  changeSearchQuery: (value) => dispath(changeSearchQuery(value)),
});

export default connect(null, mapDispatchToProps)(SearchPanel);
