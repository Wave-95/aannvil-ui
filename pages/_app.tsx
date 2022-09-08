import { ThemeProvider } from '@material-tailwind/react';
import { AlertProvider } from 'contexts/alert';
import { ConnectionProvider } from 'contexts/connection';
import '../styles/globals.css';

const theme = {
  typography: {
    defaultProps: {
      color: 'blue-gray'
    }
  }
}

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider value={theme}>
      <AlertProvider>
        <ConnectionProvider>{getLayout(<Component {...pageProps} />)}</ConnectionProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}
