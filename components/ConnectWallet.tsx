import { connect, disconnect } from 'get-starknet';
import { useConnection } from 'contexts/connection';
import { ConnectionTypes } from 'contexts/connection/reducer';
import { Button } from '@material-tailwind/react';
import { useAlert } from 'contexts/alert';
import { connected, disconnected, hasDisconnected } from 'utils';

export default function ConnectWallet() {
  const [state, dispatch] = useConnection();
  const { setError } = useAlert();
  const { isConnected } = state;

  async function connectWallet(): Promise<void> {
    //Show modal if user has manually disconnected previously
    const starknet = await connect({ showList: Boolean(hasDisconnected()) });
    if (starknet) {
      await starknet.enable();
      dispatch({ type: ConnectionTypes.CONNECT, payload: starknet });
      connected();
    } else {
      setError('Could not connect to wallet.');
    }
  }

  async function disconnectWallet(): Promise<void> {
    await disconnect();
    disconnected();
    dispatch({ type: ConnectionTypes.DISCONNECT });
  }

  return (
    <Button onClick={isConnected ? disconnectWallet : connectWallet} className="min-w-14">
      {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </Button>
  );
}
