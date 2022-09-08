import CreateLayout from 'layouts/create';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Create() {
  return (
    <Fragment>
      <Head>
        <title>Aannvil | Create</title>
        <meta name="description" content="Deploy your own smart contracts on StarkNet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Fragment>
  );
}

Create.getLayout = (page) => {
  return <CreateLayout>{page}</CreateLayout>;
};
