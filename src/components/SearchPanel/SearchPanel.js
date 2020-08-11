import React, { useState, useEffect } from 'react';
import styles from './SearchPanel.module.css';
import searchIcon from './search_icon.svg';
import closeIcon from './close_icon.svg';
import Icon from '../Icon/Icon';
import { connect } from 'react-redux';
import { changeSearchQuery } from '../Header/headerActions';

function SearchPanel(props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => setInputValue(event.target.value);
  const handleClick = () => setInputValue('');

  useEffect(() => {
    props.changeSearchQuery(inputValue);
  }, [inputValue]);

  return (
    <div className={styles.wrap}>
      <Icon title='Search' icon={searchIcon} />
      <input
        value={inputValue}
        onChange={handleChange}
        className={styles.input}
        placeholder='Search'
      />
      <div onClick={handleClick}>
        <Icon title='Close' icon={closeIcon} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispath) => ({
  changeSearchQuery: (value) => dispath(changeSearchQuery(value)),
});

export default connect(null, mapDispatchToProps)(SearchPanel);
