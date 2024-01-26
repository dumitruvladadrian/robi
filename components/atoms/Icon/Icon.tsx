import React from 'react';
import Icons from './sprite.svg';

export const Icon = ({name, width, height}) => (
  <svg width={width} height={height}>
    <use href={`${Icons}#${name}`} />
  </svg>
);

Icon.defaultProps = {
  width: 30,
  height: 30,
};
