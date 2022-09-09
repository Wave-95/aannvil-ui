import { Button, Input, Typography } from '@material-tailwind/react';
import CreateLayout from 'layouts/create';
import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useConnection } from 'contexts/connection';
import ConnectWallet from 'components/ConnectWallet';

const headingDetails = {
  subtitle: 'Deploy a standard ERC20 token smart contract on StarkNet.',
  description:
    "The ERC20 token standard is a specification for fungible tokens, a type of token where all the units are exactly equal to each other. This template uses OpenZeppelin's implementation of ERC20 written in Cairo.",
};

export default function CreateERC20() {
  const router = useRouter();
  const { pid } = router.query;
  const [state] = useConnection();
  const { isConnected } = state;

  const Heading = ({ headingDetails }) => {
    return (
      <header>
        <Typography variant="h6" className="text-blue-500 mb-2">
          ERC20
        </Typography>
        <Typography
          variant="h3"
          className="capitalize inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >{`${pid} Template`}</Typography>
        <Typography variant="subtitle" className="block mt-2 text-gray-900 text-lg">
          {headingDetails?.subtitle}
        </Typography>
        <Typography variant="p" className="mt-5">
          {headingDetails?.description}
        </Typography>
      </header>
    );
  };

  const DeploymentModal = ({}) => {
    return (
      <div className="mt-8 prose prose-slate">
        <Typography variant="h5">Deploy Template</Typography>
        <div className="mt-4 py-6 px-4 rounded-md border border-blue-500 shadow-xl space-y-8">
          <div>
            <Typography variant="h6">ERC20 Configuration</Typography>
            <Typography variant="p" className="text-sm mt-0">
              Customize the fields below to deploy your own ERC20 smart contract.
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <Input label="Token Name" defaultValue={'Aannvil'} />
            <Input label="Token Symbol" defaultValue={'ANV'} />
            <Input label="Total Supply" defaultValue={1000000} />
            <Input label="Recipient" />
            <Input label="Decimals" defaultValue={18} />
          </div>
          <div className="flex">
            {isConnected ? <Button className="ml-auto">Deploy Now</Button> : <ConnectWallet className="ml-auto" />}
          </div>
        </div>
      </div>
    );
  };

  const ContractInterface = ({}) => {
    return (
      <div className="mt-8 prose prose-slate">
        <Typography variant="h5">Contract Interface</Typography>
        <pre>
          <code className="language-cairo">{`@contract_interface
namespace IERC20:
    func name() -> (name: felt):
    end

    func symbol() -> (symbol: felt):
    end

    func decimals() -> (decimals: felt):
    end

    func totalSupply() -> (totalSupply: Uint256):
    end

    func balanceOf(account: felt) -> (balance: Uint256):
    end

    func allowance(owner: felt, spender: felt) -> (remaining: Uint256):
    end

    func transfer(recipient: felt, amount: Uint256) -> (success: felt):
    end

    func transferFrom(
            sender: felt,
            recipient: felt,
            amount: Uint256
        ) -> (success: felt):
    end

    func approve(spender: felt, amount: Uint256) -> (success: felt):
    end
end`}</code>
        </pre>
      </div>
    );
  };

  return (
    <Fragment>
      <Head>
        <title>Aannvil | Create</title>
        <meta name="description" content="Deploy your own smart contracts on StarkNet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-8">
        <Heading headingDetails={headingDetails} />
        <DeploymentModal />
        <ContractInterface />
      </div>
    </Fragment>
  );
}

CreateERC20.getLayout = (page) => {
  return <CreateLayout>{page}</CreateLayout>;
};
