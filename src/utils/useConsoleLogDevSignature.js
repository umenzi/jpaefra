/* eslint-disable no-console */
import { useIsProbablySafari } from './useIsProbablySafari';

export const useConsoleLogDevSignature = () => {
  const isSafari = useIsProbablySafari();
  const sizeStyle = `font-size: 20px;  ${isSafari ? '' : 'display:inline-block; padding: 10px;'}`;
  const style = `color: white; background: #e85a4f; font-family:monospace; ${sizeStyle}`;
  const log = text => console.log(`%c${text.toUpperCase()}`, style);

  // Credits to: https://github.com/bryantcodesart/portfolio-site

  setTimeout(() => {
    log('looking at my code, are you?');

    log('awesome! dig around!');

    log('Although you\'ll probably have more luck looking at the repo:');

    console.log('%chttps://github.com/umenzi/jpaefra', sizeStyle);

    log(':)');
  }, 1000);
};
