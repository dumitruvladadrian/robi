import React from 'react';
import { useState } from 'react';
import styles from 'components/menu/MobileMenu.module.scss';

export const MobileMenu = () => {

  const [opened, setOpened] = useState<any>(false);

  return (
    <div className={styles.mobileMenu} style={{ width: opened ? '100%' : '100px' }}>
      <div className={styles.expandButton} onClick={() => setOpened(!opened)}>{opened ? '<' : '>'}</div>
      <a href="#home" className={styles.active}>Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#alert" className={styles.icon}>Click me</a>
    </div>
  );
}