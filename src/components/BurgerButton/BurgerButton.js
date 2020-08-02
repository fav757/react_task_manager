import React from 'react';
import styles from './BurgerButton.module.css';
import burgerIcon from './burger_icon.svg';
import Icon from '../Icon/Icon';

function BurgerButton() {
  const handleClick = () => alert('works');

  return (
    <div onClick={handleClick}>
      <Icon title='Burger' icon={burgerIcon} />
    </div>
  );
}

export default BurgerButton;
