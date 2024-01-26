import React from 'react';
import styles from './MainLayout.module.scss';
import { RobiEmblem } from 'src/view/components/emblem/RobiEmblem';
import { Menu } from 'components/menu/Menu';
import { Icon } from 'components/atoms/Icon/Icon';
import { Select } from 'components/molecules/select/Select';

export const MainLayout = () => {

  return (
    <div className={styles.mainLayout}>
      <div className={styles.top}>
        <div className={styles.header}>
          <div className={styles.headerFirstRow}>
            <RobiEmblem />
            {/*<div className={styles.motto}>Contribuim la scaderea numarului de animale fara stapan in Bucuresti inca din 2001</div>*/}
            <div className={styles.headerLinks}>
              <div className={styles.fbLogo} title='Facebook Robi'>f</div>
              {/*<div className={styles.donate} title='Doneaza prin PayPal'>Doneaza</div>*/}
              <Select preSelectedItemId={'ro'} options={[{
                id: 'ro',
                label: <Icon name='ro_flag'/>
              }, {
                id: 'en',
                label: <Icon name='en_flag' />
              }]} />
            </div>
          </div>
          <div><Menu /></div>
        </div>
        <div className={styles.imageSlider}></div>
      </div>
      <div className={styles.mainContent}>
        <Icon name='circle' />
        <Icon name='arrow_right' />
        <p>hello </p>
        <p>hello </p>
        <p>hello </p>
        <p>hello </p>
        <p>hello </p>
        <p>hello </p>
        <Icon name='ro_flag' height={19} width={30} />

        <p>hello </p>
        <p>hello </p>
      </div>
    </div>
  );
}