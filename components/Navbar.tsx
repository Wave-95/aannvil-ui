import NextLink from 'next/link';
import AccountMenu from './AccountMenu';
import { Typography } from '@material-tailwind/react';
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { LINKS } from '../constants';
import Link from 'next/link';

export default function Navbar() {
  const NavItem = ({ href, text }) => {
    return (
      <Typography as="li" variant="small" color="blue-gray">
        <NextLink href={href}>
          <a className="hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all font-semibold hover:text-blue-500">
            <span className="capsize">{text}</span>
          </a>
        </NextLink>
      </Typography>
    );
  };

  const CommunityDropDown = () => {
    return (
      <Menu>
        <MenuHandler>
          <Typography as="li" variant="small" color="blue-gray">
            <button className="hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all font-semibold hover:text-blue-500">
              <span className="capsize">Community</span>
            </button>
          </Typography>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <NextLink href={LINKS.TWITTER}>
              <span className="capsize">Twitter</span>
            </NextLink>
          </MenuItem>
          <MenuItem>
            <NextLink href={LINKS.DISCORD}>
              <span className="capsize">Discord</span>
            </NextLink>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };
  const NavList = () => (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavItem href="/" text="Home" />
      <NavItem href="/create" text="Create" />
      <NavItem href="/dashboard" text="Dashboard" />
      <CommunityDropDown />
    </ul>
  );

  return (
    <div className="absolute left-2/4 z-[999] my-4 flex w-full -translate-x-2/4 flex-wrap items-center lg:fixed mt-0 max-w-full border-b border-blue-gray-50">
      <nav className="block backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 w-full max-w-full rounded-none px-6 bg-white text-white py-4 pl-6 pr-5 lg:py-2">
        <div className="flex w-full items-center !justify-between text-[#1A237E] !text-blue-gray-900 mx-auto !max-w-[1440px]">
          <Link
            className="py-2.375 text-size-sm mr-4 whitespace-nowrap font-bold text-inherit lg:ml-0 text-gray-700"
            href="/"
          >
            Aannvil
          </Link>
          <p className="ml-3 text-xs leading-5 font-medium text-blue-800 dark:text-sky-400 bg-blue-50 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20">
            Goerli Testnet
          </p>
          <div className="relative hidden lg:flex items-center ml-auto space-x-6">
            <NavList />
            <AccountMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}
