import React, { useState } from 'react';
import styles from 'components/menu/DesktopMenu.module.scss';

export const DesktopMenu = () => {

  const [selected, setSelected] = useState<number>(0);

  const items = [
    'Acasa',
    'Despre noi',
    'Campanii si proiecte',
    'Ce facem zi de zi',
    'Adopta',
    'Fii voluntar',
    'Doneaza',
    'Sfaturi utile'
  ];

  const menuItems = items.map((item, index) => (
    <li
      className={`${styles.menuItem} ${selected === index && styles.selected}`}
      onClick={() => setSelected(index)}
      key={item}
    >
      {item}
    </li>
  ));

  return (
    <ul className={styles.menu} id="myTopnav">
      {menuItems}
    </ul>
  );
}