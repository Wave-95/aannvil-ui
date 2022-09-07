import { connect } from 'get-starknet';

import { createContext, useContext, useEffect, useReducer } from 'react';
import { connected, hasDisconnected } from 'utils';
import { connectionReducer, ConnectionTypes, INITIAL_STATE } from './reducer';

const ConnectionContext = createContext([]);

//Try connecting on mount here
const ConnectionProvider = ({ children }) => {
  const [connectionState, dispatch] = useReducer(connectionReducer, INITIAL_STATE);

  useEffect(() => {
    async function silentConnect() {
      if (hasDisconnected()) {
        console.log('return')
        return;
      }
      const starknet = await connect({ showList: false });
      if (starknet) {
        await starknet.enable();
        dispatch({ type: ConnectionTypes.CONNECT, payload: starknet });
        connected();
      }
    }
    silentConnect();
  }, []);

  return <ConnectionContext.Provider value={[connectionState, dispatch]}>{children}</ConnectionContext.Provider>;
};

function useConnection() {
  return useContext(ConnectionContext);
}

export { ConnectionProvider, useConnection };
