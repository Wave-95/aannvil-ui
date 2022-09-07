import { ThemeProvider } from '@material-tailwind/react';
import { AlertProvider } from 'contexts/alert';
import { ConnectionProvider } from 'contexts/connection';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <AlertProvider>
        <ConnectionProvider>{getLayout(<Component {...pageProps} />)}</ConnectionProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}
