import Head from 'next/head';
import Image from 'next/image';
import Layout from '../layouts';
import styles from '../styles/Home.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aannvil | Home</title>
        <meta name="description" content="Deploy your own smart contracts on StarkNet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}

Dashboard.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
