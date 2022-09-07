import { LOCAL_STORAGE } from '../constants';

export const ellipse = (address: string = '', width: number = 4) => {
  if (!address) {
    return '';
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
};

export const connected = (): void => {
  localStorage.setItem(LOCAL_STORAGE.DISCONNECTED, 'FALSE');
};

export const disconnected = () => {
  localStorage.setItem(LOCAL_STORAGE.DISCONNECTED, 'TRUE');
};

export const hasDisconnected = (): boolean => {
  const value = localStorage.getItem(LOCAL_STORAGE.DISCONNECTED);
  return value === 'TRUE';
};

export const isFirstTimeUser = (): boolean => {
  const value = localStorage.getItem(LOCAL_STORAGE.DISCONNECTED);
  return value === null;
};
