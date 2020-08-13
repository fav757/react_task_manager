import React from 'react';
import styles from './Header.module.css';
import SearchPanel from '../SearchPanel/SearchPanel';
import burgerIcon from './burger_icon.svg';
import Icon from '../Icon/Icon';
import logoIcon from './logo_placeholder.png';
import { connect } from 'react-redux';
import { toggleSideMenu } from './headerActions';
import linkIcon from './link_icon.svg';

function BurgerButton(props) {
  const handleClick = () => props.toglleMenu();

  return (
    <div className={styles.burger} onClick={handleClick}>
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

function ResumeLink() {
  return (
    <div className={styles.linkTab}>
      <div className={styles.hiddenSector}>
        <div className={styles.slideButton}>{'>'}</div>
        <div className={styles.fone}></div>
      </div>
      <a href='https://fav757.github.io/'>
        https://fav757.github.io/
      </a>
    </div>
  );
}

function Header(props) {
  return (
    <header className={styles.wrap}>
      <BurgerButton toglleMenu={props.toglleMenu} />
      <Logo />
      <SearchPanel />
      <ResumeLink />
    </header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toglleMenu: () => dispatch(toggleSideMenu),
});

export default connect(null, mapDispatchToProps)(Header);
