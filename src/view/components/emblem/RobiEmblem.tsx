import React from 'react';
import s from './robiEmblem.module.scss';

export const RobiEmblem = () => (
  <div className={s.container}>
    <div>
      <span className={s.firstLine}>ASOCIATIA PENTRU</span>
      <div className={s.secondLine}> PROTECTIA ANIMALELOR</div>
      <span className={s.thirdLine}>ROBI</span>
    </div>
    <img className={s.logo} src='robi-logo.png' alt='logo' />
  </div>
)