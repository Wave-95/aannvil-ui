import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from 'components/Container';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import ExternalLinkIcon from '../Icons/ExternalLink';

const ERC20Presets = [
  { name: 'Basic', href: '/create/erc20/basic' },
  { name: 'Mintable', href: '/create/erc20/mintable' },
  { name: 'Burnable', href: '/create/erc20/burnable' },
  { name: 'Pausable', href: '/create/erc20/pausable' },
  { name: 'Upgradeable', href: '/create/erc20/upgradeable' },
  { name: 'Aannvil', href: '/create/erc20/Aannvil' },
];

const ERC721Presets = [
  { name: 'MintableBurnable', href: '/create/erc721/mintable_burnable' },
  { name: 'MintablePausable', href: '/create/erc721/mintable_pausable' },
  { name: 'Capped', href: '/create/erc721/capped' },
  { name: 'Claimable', href: '/create/erc721/claimable' },
];

const ERC1155Presets = [{ name: 'Basic', href: '/create/erc1155/basic' }];

const Sidebar = () => {
  const Section = ({ sectionTitle, sectionItems, ...props }) => {
    return (
      <li {...props}>
        <Typography variant="h6" className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
          {sectionTitle}
        </Typography>
        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
          {sectionItems.map(({ name, href }) => {
            return (
              <li>
                <div className="block border-l pl-4 -ml-px border-transparent hover:border-blue-400 dark:hover:border-blue-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  <Link href={href}>{name}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </li>
    );
  };
  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[5rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav className="lg:text-sm lg:leading-6 relative">
        <div className="sticky top-0 -ml-0.5 pointer-events-none">
          <div className="h-10 dark:bg-slate-900" />
          <Typography variant="h4">Templates</Typography>
          <div className="h-8 dark:from-slate-900" />
        </div>
        <ul className="space-y-8">
          <li className="space-y-2">
            <Link href="/create">
              <a className="block text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                Overview
              </a>
            </Link>
            <Link href="https://github.com/Wave-95/anvil-contracts" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <div className="flex items-center space-x-1">
                  <span>Source Code</span>
                  <ExternalLinkIcon className="h-4 w-4" />
                </div>
              </a>
            </Link>
          </li>
          <Section sectionTitle="ERC20 Tokens" sectionItems={ERC20Presets} />
          <Section sectionTitle="ERC721 Tokens" sectionItems={ERC721Presets} />
          <Section sectionTitle="ERC1155 Tokens" sectionItems={ERC1155Presets} />
        </ul>
      </nav>
    </div>
  );
};

export default function CreateLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <div className="lg:pl-[19.5rem]">
          <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">{children}</div>
        </div>
      </Container>
    </>
  );
}
