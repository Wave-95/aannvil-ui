import { Menu, MenuHandler, MenuList, MenuItem, Button, Typography, Tooltip } from '@material-tailwind/react';
import cn from 'classnames';
import { useConnection } from 'contexts/connection';
import { useAlert } from 'contexts/alert';
import ConnectWallet from './ConnectWallet';
import CopyIcon from 'Icons/Copy';
import HamburgerIcon from 'Icons/Hamburger';
import LightbulbIcon from 'Icons/Lightbulb';
import MoonIcon from 'Icons/Moon';
import UserIcon from 'Icons/User';
import { ellipse } from 'utils';
import Image from 'next/image';

export default function AccountMenu() {
  const [state] = useConnection();
  const { setSuccess } = useAlert();
  const { isConnected, selectedAddress, icon } = state;
  const ellipsedAddress = ellipse(selectedAddress);

  function handleCopyAddress() {
    navigator.clipboard.writeText(selectedAddress);
    setSuccess('Address copied.');
  }

  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <Tooltip content={isConnected ? ellipsedAddress : 'Connect Wallet'} placement="bottom">
        <MenuHandler>
          <Button className="flex space-x-3 border-blue-500/80" variant="outlined">
            <HamburgerIcon className="h-4 w-4 fill-gray-700" />
            <div className="h-4 w-4">
              {isConnected ? (
                <Image width="22" height="22" src={icon} alt="wallet-provider-icon" />
              ) : (
                <UserIcon className="fill-gray-700" />
              )}
            </div>
          </Button>
        </MenuHandler>
      </Tooltip>
      <MenuList className="p-0 min-w-max">
        <Typography
          className={cn({ hidden: !selectedAddress }, 'font-semibold text-sm p-4 border-b')}
        >{`Account (${ellipsedAddress})`}</Typography>
        <div className="flex flex-col p-2">
          <div className={cn({ 'order-last': isConnected }, 'py-2')}>
            <ConnectWallet />
          </div>
          <MenuItem className={cn({ hidden: !isConnected })}>
            <div className="flex items-center space-x-2" onClick={handleCopyAddress}>
              <CopyIcon className="h-4 w-4 fill-gray-700" />
              <Typography variant="small">Copy Address</Typography>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center space-x-2">
              <LightbulbIcon className="h-4 w-4 fill-gray-700" />
              <Typography variant="small">Request Feature</Typography>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center space-x-2">
              <MoonIcon className="h-4 w-4 fill-gray-700" />
              <Typography variant="small">Switch Mode</Typography>
            </div>
          </MenuItem>
        </div>
      </MenuList>
    </Menu>
  );
}
