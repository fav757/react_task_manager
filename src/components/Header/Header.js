import React from 'react';
import styles from './Header.module.css';
import SearchPanel from '../SearchPanel/SearchPanel';
import burgerIcon from './burger_icon.svg';
import Icon from '../Icon/Icon';
import logoIcon from './logo_placeholder.png';
import { connect } from 'react-redux';
import { toggleSideMenu } from './headerActions';

function BurgerButton(props) {
  const handleClick = () => props.toglleMenu();

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

function Header(props) {
  return (
    <header className={styles.wrap}>
      <BurgerButton toglleMenu={props.toglleMenu}/>
      <Logo />
      <SearchPanel />
    </header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toglleMenu: () => dispatch(toggleSideMenu)
});

export default connect(null, mapDispatchToProps)(Header);
