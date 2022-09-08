import { Typography } from '@material-tailwind/react';
import CreateLayout from 'layouts/create';
import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function CreateERC20() {
  const router = useRouter();
  const { pid } = router.query;

  const Heading = () => {
    return (
      <header>
        <Typography variant="h6" className="text-blue-500">
          ERC-20
        </Typography>
        <Typography variant="h3" className="capitalize">{`${pid} Template`}</Typography>
        <Typography variant="subtitle" className="block">
          Deploy a standard ERC-20 token smart contract on StarkNet.
        </Typography>
      </header>
    );
  };

  return (
    <Fragment>
      <Head>
        <title>Aannvil | Create</title>
        <meta name="description" content="Deploy your own smart contracts on StarkNet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
    </Fragment>
  );
}

CreateERC20.getLayout = (page) => {
  return <CreateLayout>{page}</CreateLayout>;
};
