import React, { useState } from 'react';
import { Alert } from '@material-tailwind/react';
import { color } from '@material-tailwind/react/types/components/alert';

interface AlertState {
  show: boolean;
  message: string;
  color: color;
}

type AlertSetter = (message: string) => void;

interface AlertContextInterface {
  setInfo: AlertSetter;
  setSuccess: AlertSetter;
  setError: AlertSetter;
}

const AlertContext = React.createContext<AlertContextInterface | null>(null);

const AlertProvider = ({ children }) => {
  const [alertInfo, setAlertInfo] = useState<AlertState>({ show: false, message: '', color: 'light-blue' });

  const handleClose = () => {
    setAlertInfo({ ...alertInfo, show: false });
  };

  const setSuccess: AlertSetter = (message) => {
    setAlertInfo({ show: true, color: 'green', message });
    setTimeout(handleClose, 5000);
  };

  const setError: AlertSetter = (message) => {
    setAlertInfo({ show: true, color: 'deep-orange', message });
    setTimeout(handleClose, 5000);
  };

  const setInfo: AlertSetter = (message) => {
    setAlertInfo({ show: true, color: 'light-blue', message });
    setTimeout(handleClose, 5000);
  };

  return (
    <AlertContext.Provider value={{ setInfo, setSuccess, setError }}>
      <Alert
        show={alertInfo?.show}
        color={alertInfo?.color}
        animate={{ mount: { y: 0 }, unmount: { y: 100 } }}
        dismissible={{ onClose: handleClose }}
        className="fixed w-fit left-1 bottom-1 z-[1000]"
        style={{ bottom: '0.25rem' }} //Tailwind bottom-1 not seem to be working??
      >
        {alertInfo.message}
      </Alert>
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => React.useContext(AlertContext);

export { AlertProvider, useAlert };
