import { Button, Typography } from '@material-tailwind/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../layouts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aannvil | Home</title>
        <meta name="description" content="Deploy your own smart contracts on StarkNet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex items-center">
        <div className="space-y-4">
          <div className="flex items-center space-x-4 justify-start">
            <Typography variant="h1" className="font-bold text-4xl max-w-screen-sm">
              Build on StarkNet
            </Typography>
            <Image
              className="h-12 w-12 sm:block hidden"
              src="https://starkware.co/wp-content/uploads/2021/07/Group-177.svg"
              data-src="https://starkware.co/wp-content/uploads/2021/07/Group-177.svg"
              alt="starknet-logo"
            />
          </div>
          <p className="text-2xl max-w-screen-sm text-gray-600">
            Easily configure, deploy, and maintain your own smart contracts on StarkNet. No code needed.
          </p>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button variant="outlined">Source</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
