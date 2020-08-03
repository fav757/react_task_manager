import React from 'react';
import styles from './Main.module.css';
import Sidemenu from '../SideMenu/SideMenu';
import Workspace from '../Workspace/WorkSpace';

function Main() {
  return (
    <main className={styles.wrap}>
      <Sidemenu />
      <Workspace />
    </main>
  );
}

export default Main;
