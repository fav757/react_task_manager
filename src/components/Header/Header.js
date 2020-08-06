import React from 'react';
import styles from './Header.module.css';
import SearchPanel from '../SearchPanel/SearchPanel';
import AuthorCard from '../AuthorCard/AuthorCard';
import burgerIcon from './burger_icon.svg';
import Icon from '../Icon/Icon';
import logoIcon from './logo_placeholder.png';

function BurgerButton() {
  const handleClick = () => alert('works');

  return (
    <div onClick={handleClick}>
      <Icon title='Burger' icon={burgerIcon} />
    </div>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.icon} src={logoIcon} alt='logo' />
      <h1 className={styles.header}>Logo</h1>
    </div>
  );
}

function Header() {
  return (
    <header className={styles.wrap}>
      <BurgerButton />
      <Logo />
      <SearchPanel />
      <AuthorCard />
    </header>
  );
}

export default Header;
