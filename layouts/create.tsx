import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from 'components/Container';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
const ERC721Presets = [
  { name: 'MintableBurnable', href: '/create/erc721/mintable_burnable' },
  { name: 'MintablePausable', href: '/create/erc721/mintable_pausable' },
  { name: 'Capped', href: '/create/erc721/capped' },
  { name: 'Claimable', href: '/create/erc721/claimable' },
];

const ERC20Presets = [
  { name: 'Base', href: '/create/erc20/base' },
  { name: 'Burnable', href: '/create/erc20/burnable' },
  { name: 'Mintable', href: '/create/erc20/mintable' },
  { name: 'Pausable', href: '/create/erc20/pausable' },
  { name: 'Upgradeable', href: '/create/erc20/upgradeable' },
  { name: 'Aannvil', href: '/create/erc20/Aannvil' },
];

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
          <Section sectionTitle="ERC-20 Tokens" sectionItems={ERC20Presets} />
          <Section sectionTitle="ERC-721 Tokens" sectionItems={ERC721Presets} />
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
