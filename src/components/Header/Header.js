import React from 'react';
import styles from './Header.module.css';
import BurgerButton from '../BurgerButton/BurgerButton';
import SearchPanel from '../SearchPanel/SearchPanel';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className={styles.wrap}>
      <BurgerButton />
      <Logo />
      <SearchPanel />
    </header>
  );
}

export default Header;
