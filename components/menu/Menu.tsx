import React from 'react';
import useWindowDimensions from 'src/hooks/windowDimensions';
import { MIN_DESKTOP_WIDTH } from 'components/config/config';
import { DesktopMenu } from 'components/menu/DesktopMenu';
import { MobileMenu } from 'components/menu/MobileMenu';

export const Menu = () => {
  const windowDim = useWindowDimensions() as any;

  return (windowDim.width < MIN_DESKTOP_WIDTH) ? <MobileMenu /> : <DesktopMenu />;
}